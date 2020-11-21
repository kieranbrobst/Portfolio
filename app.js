console.log("hello world")

function switchProject1 () {
    let movieHTML = `
    <div class="row" id="content">
        <div class="col-lg-2">
            <div class="aside">
                <a href="https://kieranbrobst.github.io/project1/"><img src="./assets/img/icons8-github-50.png" alt="github"></a>
                <a href="https://kieranbrobst.github.io/project1/"><img src="./assets/img/icons8-website-50.png" alt="loveproject"></a>
                <div class= "row back">
                    <a href="index.html" class="btn btn-back" id="go-back"><i class="fas fa-long-arrow-alt-left"></i>  Back</a>
                </div>

            </div>
        </div>
        <div class="col-lg-10">
          <div class="project1">
            <div class="project-title">
                <h1>The Movie Love Calculator</h1>
            </div>
            <div class="row">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="./assets/project1/movie-love.png" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="./assets/project1/input.png" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="./assets/project1/output1.png" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="./assets/project1/output2.png" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="./assets/project1/output3.png" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="project-content">
                    <h6>Overview</h6>
                    <p>We used the <a href="http://www.omdbapi.com/">OMDb API</a> to do a relative movie search on any of your favorite movies througout the years and which one of the actors your likely get to go on a hot date with.  We then use the <a href="https://rapidapi.com/ajith/api/love-calculator">Love Calculator API</a> to get your compatibility with all of those actors/actresses. 

                      Using the fetch statement we have created a responsive application that allows us to complete a search on any movie we choose to input.  
                      
                      For our front end CSS purposes since we used an alternative that is Bulma a free open source and modern CSS framework. </p>
                    <h6>Features</h6>
                    <p>The app saves user name's best match across all movie searches for the given input name.</p>
                    <h6>Inputs</h6>
                    <p>The user inputs the following:</p>
                    <ul>
                        <li>Title of the Movie </li>
                        <li> Your first Name</li>
                        <li>Optional: year of movie</li>
                    </ul>
                    <h6>Outputs</h6>
                    <p>The application will display:</p>
                    <ul>
                        <li>Information of the movie, including poster, description, and actors</li>
                        <li> When Get Compatibility is clicked
                            <li>It will display the % of compatibility that you have with the actors</li>
                            <li>It will display the actor that you are most compatible with in your search history </li>
                            <li>It will hide the Get Compatibiity button so that the user must push reset for a new search </li>
                        </li>
                    </ul>
                    <a href="https://kieranbrobst.github.io/project1/" class="btn btn-more">View Project</a>
                 </div>
            </div>
            </div>`


    $(".content").remove();
    $(document.body[1]).append(movieHTML);
};

$("#movie-more").on("click", switchProject1)




//   $("#reset-btn").on("click", function () {
//     window.location.reload();
//   })