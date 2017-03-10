/**
 * Created by GIO on 5/3/2017.
 */
var yo = require('yo-yo');

module.exports = yo`<div class="container">
            <div class="row">
                <div class="col s10 push-s1">

                    <section class="row">
                        <div class="col m7 hide-on-small-only">
                            <figure class="telefonos">
                                <img src="Instapaima.png" alt="telefonos" class="">
                            </figure>
                        </div>
                        <div class="col s12 m5 instapaima">
                            <div class="row">
                                <div class="signup-box">
                                    <h1>Instapaima</h1>
                                    <form action="" class="signup-form">
                                        <h2>Regístrate para ver foto de tu comunidad</h2>
                                        <div class="section center-align">
                                            <a href="" class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                                            <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="input-field section">
                                            <input type="email" name="email" placeholder="Correo Electrónico" />
                                            <input type="text" name="name" placeholder="Nombre Completo" />
                                            <input type="text" name="username" placeholder="Nombre de Ususario" />
                                            <input type="password" name="password" placeholder="Contraseña" />
                                            <button class="btn waves-effect waves-light bg-botton-orange" type="submit">Regístrate</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box a-orange">
                                    Tienes una cuenta <a href="/signin">Entrar</a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>`;
