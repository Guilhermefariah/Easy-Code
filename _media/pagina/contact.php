<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nike - Exclusive Productions and Collections</title>
    <link rel="shortcut icon" href="/_image/nike.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/_css/form.css">
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarInd" aria-controls="navbarInd" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarInd">
                    <a class="navbar-brand text-light fs-4">Nike News</a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Nike</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Join Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Help</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Enter</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control border-light rounded-5 me-2" type="search" placeholder="Buscar..."
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
                        href="/_media/nikeworld.html">Nike Mundo</a>
                </div>
                <div class="col">
                    <a class="link-dark link-offset-3-hover link-dange-opacity-50-hover" href="/_media/media.html">Nike
                        Media</a>
                </div>
                <div class="col rounded-5">
                    <a class="link-dark link-offset-3-hover link-dange-opacity-50-hover"
                        href="/_media/pagina/contact.html">Contato</a>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="container text-center mt-5">
            <div class="row">
                <div class="col">
                    <img class="image img-fluid border border-1" src="/_inteface/email.jpg">
                </div>
            </div>
        </div>

        <div class="container mt-3 text-center">
            <div class="row">
                <div class="col justify-content-center d-flex align-items-center">
                    <div class="spinner-grow text-warning spinner-grow-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <h1 class="text-body-secondary">Nike News</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1 class="text-light">Formulary Nike News</h1>
                    <h3 class="text-light">Guideveloper in 2024</h3>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 mt-2">
                    <form method="post" action="/_media/api.php" oninput="calc_total();">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" class="form-control" name="name" id="name" placeholder="Seu Nome"
                                required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <div class="input-group">
                                <span class="input-group-text">@</span>
                                <input type="email" class="form-control is-invalid" id="email"
                                    aria-describedby="emailHelp" placeholder="Seu email" required>
                            </div>
                            <small id="emailHelp" class="form-text text-muted">Email será deletado após envio</small>
                        </div>                 
                        <div class="form-group mt-2">
                            <label for="password">Senha</label>
                            <input type="password" class="form-control" id="password" placeholder="Sua Senha" required>
                        </div>
                        <div class="form-group mt-2">
                            <label for="selectForm">Nacionalidade</label>
                            <select class="form-select" id="selectForm">
                                <option selected disabled>Sua Nacionalidade</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="form-group mt-2">
                            <label for="date">Data de Nascimento</label>
                            <input type="date" class="form-control" id="date" name="date">
                        </div>
                        <div class="form-group mt-2">
                            <label for="adress">Endereço</label>
                            <input type="text" class="form-control" id="adress" placeholder="Rua, Avenida, etc.">
                        </div>
                        <div class="form-group mt-2">
                            <label for="city">Cidade</label>
                            <input type="text" class="form-control" id="city" placeholder="Sua Cidade...">
                        </div>
                        <div class="form-group mt-2">
                            <label for="state">Estado</label>
                            <select class="form-select" id="state">
                                <option selected disabled>Seu Estado...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="form-group mt-2">
                            <label for="range" class="form-range">Grau de Urgência:</label>
                            <div class="col-sm-10">
                                <input type="range" class="form-range" id="range" min="0" max="10" step="2" value="2">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="text">Comentarios</label>
                            <textarea class="form-control" id="text" rows="2" placeholder="Novidades..."></textarea>
                        </div>
                        <fieldset id="request">
                            <div class="mt-2">
                                <label for="cColor" class="form-label col-lg-2">Cor:</label>
                                <input type="color" name="tColor" id="cColor" class="form-control" value="#87ce">
                            </div>
                            <div class="mt-2">
                                <label for="cAmount" class="form-label">Quantia:</label>
                                <input type="number" name="tAmount" id="cAmount" class="form-control" min="0" max="5" value="0" placeholder="Amount...">
                            </div>
                            <div class="mt-2">
                                <label for="cPrice" class="form-label">Total preço: R$</label>
                                <input type="text" name="tPrice" id="cPrice" class="form-control" readonly placeholder="Total Price...">
                            </div>
                        </fieldset>      
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" name="checkbox" id="checkbox"
                                value="option">
                            <label class="form-check-label" for="checkbox">
                                Salvar Dados
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary mt-2">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
        <footer class="rodape mt-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="mt-0 text-lg-start">Projeto Código Aberto - by Guideveloper</p>
                    </div>
                    <div class="col text-end">
                        <a href="#" class="me-3" target="_blank">GitHub</a>
                        <a href="#" target="_blank">Linkedin</a>
                    </div>
                </div>
            </div>
        </footer>
        <script src="/_media/amountprice.js"></script>
        <script src="/app.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossorigin="anonymous"></script>
    </main>
</body>

</html>