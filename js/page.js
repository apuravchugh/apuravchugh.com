var firstLaunch = true;
const myWork = new Vue({
    el: "#portfolioContent",
    data: {
        portfolioProjects: [],
        categories: [],
        filterBy: ''
    },
    methods: {

        hideShowFilter(e) {
            document.querySelector('.fa-sort-down').classList.toggle("open");
            document.querySelector('.filter').classList.toggle("hidden");
        },

        chooseProject(e) {

            chosenProject = e.currentTarget.querySelector('h5').innerHTML;
            for (i = 0; i < portfolioProjects.length; i++) {
                if (portfolioProjects[i].project_id == chosenProject) {
                    chosenProject = i;
                }
            }

            viewProject = document.querySelector('#viewProject');
            viewProject.classList.add('showProject');
            viewProject.querySelector('h4').innerHTML = portfolioProjects[chosenProject].project_name;
            viewProject.querySelector('p').innerHTML = portfolioProjects[chosenProject].category_name;
            projectDetails = document.querySelector('#projectDetails');
            projectImages = document.querySelector('#projectImages');
            projectImages.querySelectorAll('img')[0].src = "images/" + portfolioProjects[chosenProject].project_img1;
            if (portfolioProjects[chosenProject].project_attachment) {
                projectAttachment = document.createElement('a');
                projectAttachment.target = '_blank';
                projectAttachment.innerHTML = "View documentation";
                projectDetails.appendChild(projectAttachment);
            }
            if (portfolioProjects[chosenProject].project_url) {
                projectURL = document.createElement('a');
                projectURL.target = '_blank';
                projectURL.innerHTML = "Visit site";
                projectDetails.appendChild(projectURL);
            }
            projectDetails.querySelector('p').innerHTML = portfolioProjects[chosenProject].project_description;

            const imgGallery = new Siema({
                selector: '#projectImages',
                duration: 200,
                easing: 'ease-out',
                perPage: 1,
                startIndex: 0,
                draggable: true,
                multipleDrag: true,
                threshold: 20,
                loop: true,
                rtl: false,
                onInit: () => { },
                onChange: () => { },
            });
            document.querySelector('.fa-times').classList.add('showHide');
            document.querySelector('.fa-times').addEventListener('click', () => {
                viewProject.classList.remove('showProject');
                document.querySelector('.fa-times').classList.remove('showHide');
                setTimeout(() => { imgGallery.destroy(true); }, 500);
                if (portfolioProjects[chosenProject].project_url) {
                    projectDetails.removeChild(projectURL);
                }
                if (portfolioProjects[chosenProject].project_attachment) {
                    projectDetails.removeChild(projectAttachment);
                }
            }, false);
        },

        dropFilter(e) {
            filterBy = '';
            this.getData(filterBy);
            if (!firstLaunch) {
                for (i = 0; i < document.querySelectorAll('.category').length; i++) {
                    document.querySelectorAll('.category')[i].classList.remove('activeFilter');
                }
                e.currentTarget.classList.add('activeFilter');
            }
            firstLaunch = false;
        },

        activateFilter(e) {
            filterBy = "AND c.category_name = '" + e.currentTarget.innerHTML + "'";
            this.getData(filterBy);
            for (i = 0; i < document.querySelectorAll('.category').length; i++) {
                document.querySelectorAll('.category')[i].classList.remove('activeFilter');
            }
            e.currentTarget.classList.add('activeFilter');
        },

        getData(filterBy) {
            let targetURL = `./includes/connect.php?categoryFilter=${filterBy}`;

            fetch(targetURL)
                .then(res => res.json())
                .then(data => {
                    this.portfolioProjects = [];
                    portfolioProjects = data[0];
                    data[0].forEach(thisData => {
                        this.portfolioProjects.push(thisData);
                    });
                    this.categories = [];
                    categories = data[1];
                    data[1].forEach(thisData => {
                        this.categories.push(thisData);
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
});

myWork.dropFilter();
