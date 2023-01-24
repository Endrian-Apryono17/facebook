// show/hide password
const password = document.getElementById('pw')
const change = document.getElementById('change')

function pwhide() {
    if(password.type == 'password') {
        password.type = 'text'
        change.innerHTML = 'visibility'
    } else {
        password.type = 'password'
        change.innerHTML = 'visibility_off'
    }
}

// login
const email = document.getElementById('email')
const pw = document.getElementById('pw')

const login = document.getElementById('login')

login.addEventListener('click', function() {
    if(email.value == 'admin@gmail.com' && pw.value == 'admin123') {
        alert('ok masuk');
    } else {
        alert('salah');
    }
})

// register
const akun = document.getElementById('akun')
const reg = document.getElementById('reg')
const tutup = document.getElementById('tutup')
const footer = document.querySelector('.footer')

akun.addEventListener('click', function() {
    reg.classList.remove('hapus')
    reg.classList.toggle('ok')
    tutup.classList.toggle('tutup')
    footer.classList.add('delete')
    reg.innerHTML = `<div class="register_">
    <p class="link"><span class="material-symbols-outlined">close</span></p>
    <div class="register">
        <h1>Sign Up</h1>
        <h3>It's quick and easy.</h3>
    </div>
    <div class="garis"></div>

    <div class="data">
        <form>
            <ul class="cek">
                <li><input type="text" placeholder="First name" class="nama1"></li>
                <li><input type="text" placeholder="Surname" class="nama2"></li>
            </ul>

            <input type="text" placeholder="Mobile number or email address" class="email">
            <input type="text" placeholder="New password" class="pass">

            <h3 class="date" title="Click for more information">Date of birth <span class="material-symbols-outlined">
                question_mark
            </span></h3>

            
            <div class="custom">
                <select >
                  <option value="1">1</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8" selected>8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>

                <select>
                    <option value="1">jan</option>
                    <option value="2">feb</option>
                    <option value="3">mar</option>
                    <option value="4">apr</option>
                    <option value="5">mei</option>
                    <option value="6">jun</option>
                    <option value="7">jul</option>
                    <option value="8">aug</option>
                    <option value="9">sep</option>
                    <option value="19">okt</option>
                    <option value="11">nov</option>
                    <option value="12">des</option>
                </select>
                <select>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8" selected>2023</option>
                    <option value="9">9</option>
                </select>
            </div>

            <h3 class="date" title="Click for more information">Gender <span class="material-symbols-outlined">
                question_mark
            </span></h3>
            <div class="radio_but">
                    <label for="female">Female</label>
                    <input type="radio" id="female" value="Female" name="jenis kelamin">
                    <label for="male">Male</label>
                    <input type="radio" id="male" value="Male" name="jenis kelamin">
                    <label for="custom">Custom</label>
                    <input type="radio" id="custom" value="Custom" name="jenis kelamin">
            </div>  

            <div class="notif">
                <p>People who use our service may have uploaded your contact information to Facebook. <span> Learn more.</span></p>

                <p>By clicking Sign Up, you agree to our <span>Terms</span>, <span>Privacy Polict</span> and <span>Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.</p>
            </div>

            <div class="tombol">
                <button type="button">Sign Up</button>
            </div>
        </form>
    </div>
</div>`
    const link = document.querySelector('.link') 
    link.addEventListener('click', function() {
        reg.classList.add('hapus')
        tutup.classList.remove('tutup')
        footer.classList.remove('delete')
    })
})

