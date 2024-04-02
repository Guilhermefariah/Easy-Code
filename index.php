<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nike - Exclusive Productions and Collections</title>
    <link rel="shortcut icon" href="/_image/nike.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    
</head>
<body onload="load()">
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <a class="navbar-brand text-light fs-4">Nike News</a>
                    <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Nike</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Join Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">H</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Enter</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control is-valid border-light rounded-5 me-2" type="search" placeholder="Buscar..."
                            aria-label="Search">
                        <button class="btn btn-outline-light rounded-4" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
        <div class="container text-center fs-2" style="margin-top: 100px;">
            <div class="row gap-4">
                <div class="col">
                    <a class="link-dark link-offset-3-hover link-dange-opacity-50-hover" href="/index.html">Home</a>
                </div>
                <div class="col">
                    <a class="link-dark link-offset-3-hover link-dange-opacity-50-hover"
                        href="/_media/nikeworld.html">Nike World</a>
                </div>
                <div class="col">
                    <a class="link-dark link-offset-3-hover link-dange-opacity-50-hover" href="/_media/media.html">Nike
                        Media</a>
                </div>
                <div class="col rounded-5">
                    <a class="link-dark link-offset-3-hover link-dange-opacity-50-hover"
                        href="/_media/pagina/contact.php">Contact</a>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="container text-center mt-4">
            <div class="row">
                <div class="col">
                    <div class="custom-icon-container position-relative" onmouseout="resetOpacity('figcaption')">
                        <img class="image img-fluid border border-2" src="/_image/1.jpg">
                        <figcaption id="figcaption"
                            class="position-absolute top-0 w-100 h-100 align-items-center text-white p-3 opacity-transition">
                            <h1 class="display-4 text-success">NikeSNKS</h1>
                            <h2 class="display-5 text-warning">NikeSB</h2>
                            <h3 class="display-6 text-primary">Guideveloper</h3>
                            <p>Updated in 2024</p>
                        </figcaption>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center m-2">
                <li class="page-item" onclick="screenNew('/_image/6.jpg')"><a class="page-link bg-dark link-light"
                        href="#">Previous</a></li>
                <li class="page-item" onclick="screenNew('/_image/2.jpg')"><a class="page-link bg-dark link-light"
                        href="#">1</a></li>
                <li class="page-item" onclick="screenNew('/_image/3.jpg')"><a class="page-link bg-dark link-light"
                        href="#">2</a></li>
                <li class="page-item" onclick="screenNew('/_image/4.jpg')"><a class="page-link bg-dark link-light"
                        href="#">3</a></li>
                <li class="page-item" onclick="screenNew('/_image/1.jpg')"><a class="page-link bg-dark link-light"
                        href="#">Next</a></li>
            </ul>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col">
                    <section class="cabecalho-artigo">
                        <hgroup>
                            <h1 class="text-dark text-uppercase">Nike News</h1>
                            <h2 class="text-dark">Guideveloper</h2>
                        </hgroup>
                    </section>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col col-sm-4" style="height: 80vh;">
                    <div class="custom-icon-container position-relative" onmouseout="resetOpacity('figcaptionNew')">
                        <img src="/_image/5.jpg" class="image img-fluid border border-2">
                        <figcaption id="figcaptionNew" class="position-absolute top-0 w-100 h-100 align-items-center text-white p-3 opacity-transition">
                            <h1 class="display-6 text-warning text-uppercase">Basketball</h1>
                            <h3 class="text-light text-uppercase">Nike</h3>
                            <p class="text-light">A new way of seeing the World.</p>
                        </figcaption>
                    </div>
                </div>
            </div>            
        </div>
        <table class="tablespec">
            <caption>Nike Table <span>SB</span></caption>
            <tr>
                <td class="left">News SB</td>
                <td class="right">NikeSNKS</td>
            </tr>
            <tr>
                <td rowspan="2" class="left">Nike</td>
                <td class="right">SNEAKERS</td>
            </tr>
            <tr>
                <td class="right">SNKS</td>
            </tr>
            <tr>
                <td rowspan="2" class="left">Connectivity</td>
                <td class="right">Nike</td>
            </tr>
            <tr>
                <td class="right">Nike</td>
            </tr>
            <tr>
                <td class="left">Nike News</td>
                <td class="right">Total</td>
            </tr>
        </table>
        </div>
        <aside class="lateral">
            <h1>Nike Ace</h1>
            <video id="filmOne" controls="controls">
                <source src="_inteface/v3.mp4" type="video/mp4">
            </video>
            <h1>News</h1>
            <h2>Nike News</h2>
        </aside>
        <section class="stadium">
            <h1>Soccer Nike News</h1>
            <p>Futbol Club Barcelona,
                better known as &nbsp;Barcelona and colloquially as Barça,
                is a professional football club based in Barcelona,
                Catalonia, an autonomous community in Spain.
                Compete in La Liga, the main competition
                in the Spanish league system</p>
        </section>
        <img class="stadiumimg" src="_image/6.jpg" alt="">
        <footer>
            <p>Copyright &copy; 2024 - by Guideveloper</p>
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">Linkedin</a>
        </footer>
    </main>
    <script src="app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>