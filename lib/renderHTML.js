const fs = require('fs');
const path = require('path');

// create cards
function generateCards(employeeRoster) {
    return employeeRoster.map(employee => {
        return `
            <div class="col-md-4">
                <div class="card" style="margin: 2rem; width: 18rem; height: 20rem;">
                    <div class="card-header bg-primary mb-3 text-white">
                        <h5 class="card-title"><i class="far fa-user-circle mr-2"></i><strong>${employee.getRole()}</strong></h5>
                        <h5 class="card-title">${employee.getName()}</h5>
                    </div>
                    <div class="card-body text-black">
                        <ul class="list-group">
                            <li class="list-group-item">ID:${employee.getId()}</li>
                            <li class="list-group-item">Email:${employee.getEmail()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }).join('\n')
};

//mainhtml + cards
function employeePage(employeeCards){
    return `
    <!doctype html>
        <html lang="en">
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
                <script src="https://kit.fontawesome.com/c502137733.js"></script>
            <title>Meet the Team!</title>
        </head>
        <body>
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand mx-auto" href="index.html">Meet Our Team</a>
            </nav>
            <br>  
            <div class="container">
                <div class="row">
                    ${employeeCards}
                </div>
            </div>
            <!-- JavaScript -->
            <!-- jQuery, Popper.js, Bootstrap JS -->
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"></script>
        </body>
    </html>
    `
}

function renderHTML (employeeRoster){
    const employeeCards = generateCards(employeeRoster);
    const html = employeePage(employeeCards);

    fs.writeFile(path.join(__dirname,'../output/', 'index.html'), html, err =>{
        if (err) throw err;
        console.log('SUCCESS!');
    });
};

module.exports = renderHTML;