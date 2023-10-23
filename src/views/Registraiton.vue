<template>
  <div class="wrapper">
    <div class="wrapper__form-title">
      <h3>Создать аккаунт</h3>
      <p class="desc" ref='titleRegistration'>Для входа, вам нужно зарегистрироваться</p>
      <form class="login__form" @submit.prevent = "checkInputs">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Введите почту"
			v-model="emailReg"
			ref="emailEl"
          />
		  <div ref="emailElError" class="error hide">
		  	<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<rect width="17" height="17" fill="url(#pattern0)"/>
			<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
			<use xlink:href="#image0" transform="scale(0.0294118)"/>
			</pattern>
			<image id="image0" width="34" height="34" xlink:href="data:image/png;base64,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"/>
			</defs>
			</svg>
		  </div>
		  <div ref="emailElComplete" class="complete hide">
			<img src="@/assets/complete.jpg" alt="">
			</div>
        </div>
		
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Введите ваше имя"
			v-model="nameReg"
			ref="nameEl"
          />
		   <div ref="nameElError" class="error hide">
		  	<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<rect width="17" height="17" fill="url(#pattern0)"/>
			<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
			<use xlink:href="#image0" transform="scale(0.0294118)"/>
			</pattern>
			<image id="image0" width="34" height="34" xlink:href="data:image/png;base64,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"/>
			</defs>
			</svg>
		  </div>
		  <div ref="nameElComplete" class="complete hide">
			<img src="@/assets/complete.jpg" alt="">
			</div>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Введите вашу фамилию"
			v-model="lastNameReg"
			ref="lastNameEl"
          />
		   <div ref="lastnameElError" class="error hide">
		  	<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<rect width="17" height="17" fill="url(#pattern0)"/>
			<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
			<use xlink:href="#image0" transform="scale(0.0294118)"/>
			</pattern>
			<image id="image0" width="34" height="34" xlink:href="data:image/png;base64,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"/>
			</defs>
			</svg>
		  </div>
		  <div ref="lastnameElComplete" class="complete hide">
			<img src="@/assets/complete.jpg" alt="">
			</div>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Введите пароль"
			v-model="passwordReg"
			ref="passwordEl"
          />
		  <div ref="passwordElError" class="error hide">
		  	<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<rect width="17" height="17" fill="url(#pattern0)"/>
			<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
			<use xlink:href="#image0" transform="scale(0.0294118)"/>
			</pattern>
			<image id="image0" width="34" height="34" xlink:href="data:image/png;base64,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"/>
			</defs>
			</svg>
		  </div>
		  <div ref="passwordElComplete" class="complete hide">
			<img src="@/assets/complete.jpg" alt="">
			</div>
        </div>
        <div class="female">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="exampleRadios1"
              value="man"
              @click="changeRadio('exampleRadios1')"
			  v-model="femaleReg"
            />
            <label class="form-check-label" for="exampleRadios1"> Муж. </label>
          </div>
          <div class="form-check disabled">
            <input
              class="form-check-input"
              type="radio"
              id="exampleRadios3"
              value="woman"
			  v-model="femaleReg"
              @click="changeRadio('exampleRadios3')"
            />
            <label class="form-check-label" for="exampleRadios3"> Жен. </label>
          </div>
        </div>

        <button type="submit" class="btn login">Зарегистрироваться</button>
        <router-link to="/" class="registration"> Войти в аккаунт </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			emailReg: '',
			nameReg: '',
			lastNameReg: '',
			passwordReg: '',
			femaleReg: 'none'
		}
	},
  methods: {
    changeRadio(id) {
      const radioAll = document.querySelectorAll(".form-check-input");
      radioAll.forEach((radio) => {
        radio.checked = false;
      });
      document.getElementById(id).checked = true
    },
	async checkInputs() {
		if(this.emailReg && this.emailReg.includes('@mail') || this.emailReg && this.emailReg.includes('@gmail')) {
			//complete
			this.$refs.emailElComplete.style.opacity = '1'
			this.$refs.emailElError.style.opacity = '0'
			this.$refs.emailEl.style.border = '1px solid green'
			this.$refs.emailEl.style.color = 'green'
		} else {
			// show error
			this.$refs.emailElError.style.opacity = '1'
			this.$refs.emailElComplete.style.opacity = '0'
			this.$refs.emailEl.style.border = '1px solid red'
			return
		}
		if(this.nameReg && this.nameReg.length >= 3) {
			//complete
			this.$refs.titleRegistration.textContent = 'Для входа, вам нужно зарегистрироваться'
			this.$refs.titleRegistration.style.color = '#202002'
			this.$refs.nameElComplete.style.opacity = '1'
			this.$refs.nameElError.style.opacity = '0'
			this.$refs.nameEl.style.border = '1px solid green'
			this.$refs.nameEl.style.color = 'green'
		} else {
			//show error
			this.$refs.titleRegistration.style.color = 'red'
			this.$refs.titleRegistration.textContent = `Ваше имя должно быть больше 3 символов`
			this.$refs.nameElError.style.opacity = '1'
			this.$refs.nameElComplete.style.opacity = '0'
			this.$refs.nameEl.style.border = '1px solid red'
			return 
		}
		if(this.lastNameReg && this.lastNameReg.length >3) {
			//complete
			this.$refs.titleRegistration.textContent = 'Для входа, вам нужно зарегистрироваться'
			this.$refs.titleRegistration.style.color = '#202002'
			this.$refs.lastnameElComplete.style.opacity = '1'
			this.$refs.lastnameElError.style.opacity = '0'
			this.$refs.lastNameEl.style.border = '1px solid green'
			this.$refs.lastNameEl.style.color = 'green'
		} else {
			//show error
			this.$refs.titleRegistration.style.color = 'red'
			this.$refs.titleRegistration.textContent = `Ваша фамилия должна быть больше 3 символов`
			this.$refs.lastnameElError.style.opacity = '1'
			this.$refs.lastnameElComplete.style.opacity = '0'
			this.$refs.lastNameEl.style.border = '1px solid red'
			return 
		}
		if(this.passwordReg && this.passwordReg.length >= 8) {
			//complete
			this.$refs.titleRegistration.textContent = 'Для входа, вам нужно зарегистрироваться'
			this.$refs.titleRegistration.style.color = '#202002'
			this.$refs.passwordElComplete.style.opacity = '1'
			this.$refs.passwordElError.style.opacity = '0'
			this.$refs.passwordEl.style.border = '1px solid green'
			this.$refs.passwordEl.style.color = 'green'
		} else {
			//show error
			this.$refs.titleRegistration.style.color = 'red'
			this.$refs.titleRegistration.textContent = `Пароль должен быть больше 8 символов, сейчас: ${this.passwordReg.length}`
			this.$refs.passwordElError.style.opacity = '1'
			this.$refs.passwordElComplete.style.opacity = '0'
			this.$refs.passwordEl.style.border = '1px solid red'
			return 
		}
		if(this.femaleReg === 'none') {
			//show error
			this.$refs.titleRegistration.style.color = 'red'
			this.$refs.titleRegistration.textContent = `Пожалуйста, укажите ваш пол`
			return
		}
		const user = {
			email: this.emailReg,
			password: this.passwordReg,
			name: this.nameReg,
			lastName: this.lastNameReg,
			female: this.femaleReg
		}
		await this.$store.dispatch('registerUser', user)
		if(this.$store.getters.checkError === 'error') {
			this.$refs.titleRegistration.style.color = 'red'
			this.$refs.titleRegistration.textContent = `Текущий email уже используется`
			this.$refs.emailElError.style.opacity = '1'
			this.$refs.emailElComplete.style.opacity = '0'
			this.$refs.emailEl.style.border = '1px solid red'
			this.$refs.emailEl.style.color = 'red'
		} else {
			this.$refs.titleRegistration.textContent = 'Для входа, вам нужно зарегистрироваться'
			this.$refs.titleRegistration.style.color = '#202002'
			this.$refs.emailElComplete.style.opacity = '1'
			this.$refs.emailElError.style.opacity = '0'
			this.$refs.emailEl.style.border = '1px solid green'
			this.$refs.emailEl.style.color = 'green'
			const userId = this.$store.getters.user
			const resp = await fetch(`https://chat-app-2c7bc-default-rtdb.europe-west1.firebasedatabase.app/users/${userId.name}.json`, {
				method: 'GET'
			})
			const responce = await resp.json()
			this.$store.dispatch('createCurrentUser', responce)
			localStorage.setItem('user', `${userId.name}`)
			this.$router.push('/home')
		}
	}
  },
};
// после чего посылать запрос и регестрировать пользователя
// и записывать в currentUser 
// после регистрации сделать авторизацию и вывод имени на главный экран
// имеется ввиду /home
// сделать плавный переход между страницами 
// тз на завтра завершенно! goodluck :)
</script>

<style lang="scss">
.desc {
	transition: .3s ease all;
	max-width: 310px;	
}
.form-group {
	position: relative;
}
.error {
	transition: .3s ease all;
	position: absolute;
	top: 13px;
	right: 10px;
}
.form-control {
	transition: .3s ease all;
}
.complete {
	transition: .3s ease all;
	position: absolute;
	top: 9px;
	right: 10px;
}
.hide {
	opacity: 0;
}
.female {
  display: flex;
  margin-bottom: 20px;
}
.form-check {
  margin-right: 10px;
}
</style>
