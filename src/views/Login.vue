<template>
  <div class="wrapper">
    <div class="wrapper__form-title">
      <h3>Войти в аккаунт</h3>
      <p class="desc" ref='titleLogin'>Для входа, вам нужно авторизоваться</p>
      <form class="login__form" @submit.prevent="checkInputsLogin">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Введите почту"
			v-model="emailLog"
			ref='emailLog'
          />
		  <div ref="emailLogElError" class="error hide">
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
		  <div ref="emailLogElComplete" class="complete hide">
			<img src="@/assets/complete.jpg" alt="">
			</div>
        </div>
        <div class="form-group">
          <input
            type="password"
			v-model="passwordLogin"
            class="form-control"
            placeholder="Введите пароль"
			ref="passwordLog"
          />
		  <div ref="passwordLogElError" class="error hide">
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
		  <div ref="passwordLogElComplete" class="complete hide">
			<img src="@/assets/complete.jpg" alt="">
			</div>
        </div>
        <button type="submit" class="btn login">Войти в аккаунт</button>
        <router-link to="/reg" class="registration">
          Зарегистрироваться
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			emailLog: '',
			passwordLogin: ''
		}
	},
	methods: {
		async checkInputsLogin() {
		if(this.emailLog && this.emailLog.includes('@mail') || this.emailLog && this.emailLog.includes('@gmail')) {
			//complete this.emailReg && this.emailReg.includes('@mail') || this.emailReg && this.emailReg.includes('@gmail')
			this.$refs.titleLogin.textContent = 'Для входа, вам нужно авторизоваться'
			this.$refs.titleLogin.style.color = '#202002'
			this.$refs.emailLogElComplete.style.opacity = '1'
			this.$refs.emailLogElError.style.opacity = '0'
			this.$refs.emailLog.style.border = '1px solid green'
			this.$refs.emailLog.style.color = 'green'
		} else {
			//show error
			this.$refs.emailLogElError.style.opacity = '1'
			this.$refs.emailLogElComplete.style.opacity = '0'
			this.$refs.emailLog.style.border = '1px solid red'
			return 
		}
		if(this.passwordLogin && this.passwordLogin.length >= 8) {
			this.$refs.titleLogin.textContent = 'Для входа, вам нужно авторизоваться'
			this.$refs.titleLogin.style.color = '#202002'
			this.$refs.passwordLogElComplete.style.opacity = '1'
			this.$refs.passwordLogElError.style.opacity = '0'
			this.$refs.passwordLog.style.border = '1px solid green'
			this.$refs.passwordLog.style.color = 'green'
		} else {
			this.$refs.titleLogin.style.color = 'red'
			this.$refs.titleLogin.textContent = `Пароль должен быть больше 8 символов, сейчас: ${this.passwordLogin.length}`
			this.$refs.passwordLogElError.style.opacity = '1'
			this.$refs.passwordLogElComplete.style.opacity = '0'
			this.$refs.passwordLog.style.border = '1px solid red'
			return 
		}
		const user = {
			email: this.emailLog,
			password: this.passwordLogin
		}
		await this.$store.dispatch('loginUser', user)
		if(this.$store.getters.checkError === 'error') {
			this.$refs.titleLogin.style.color = 'red'
			this.$refs.titleLogin.textContent = `Неверный email или пароль`
			this.$refs.emailLogElError.style.opacity = '1'
			this.$refs.emailLogElComplete.style.opacity = '0'
			this.$refs.emailLog.style.border = '1px solid red'
			this.$refs.emailLog.style.color = 'red'
			this.$refs.passwordLogElComplete.style.opacity = '0'
			this.$refs.passwordLogElError.style.opacity = '1'
			this.$refs.passwordLog.style.border = '1px solid red'
			this.$refs.passwordLog.style.color = 'red'
		} else {
			this.$refs.titleLogin.textContent = 'Для входа, вам нужно авторизоваться'
			this.$refs.titleLogin.style.color = '#202002'
			this.$refs.emailLogElComplete.style.opacity = '1'
			this.$refs.emailLogElError.style.opacity = '0'
			this.$refs.emailLog.style.border = '1px solid green'
			this.$refs.emailLog.style.color = 'green'
			this.$refs.passwordLogElError.style.opacity = '0'
			this.$refs.passwordLogElComplete.style.opacity = '1'
			this.$refs.passwordLog.style.border = '1px solid green'
			const userId = this.$store.getters.user
			const resp = await fetch(`https://chat-app-2c7bc-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`, {
				method: 'GET'
			})
			const responce = await resp.json()
			this.$store.dispatch('createCurrentUser', responce)
			localStorage.setItem('user', `${userId}`)
			this.$router.push('/home')
		}
		//TODO: сделать корректное отображение current user сделать главный экран с именем
		// также нужно сделать socket io
		}
	}
}
</script>

<style lang="scss">
.form-control {
	transition: .3s ease all;
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
.wrapper__form-title {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
.login {
  width: 100%;
  height: 46px;
  background-color: #4ca5ff;
  color: #fff;
}
.registration {
  color: #adadad;
  position: absolute;
  bottom: 25px;
  left: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 400;
  transform: translateX(-50%);
  &:active {
    color: #4ca5ff;
  }
}
.login__form {
  position: relative;
  margin-top: 50px;
  -webkit-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 25px 25px 80px 25px;
  background-color: #fff;
}
.wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
  h3 {
    font-weight: 400;
    text-align: center;
  }
  p {
    color: #202002;
    text-align: center;
    font-weight: 300;
    font-size: 15px;
  }
}
.form-control {
  border: 1px solid #00000041;
  &::placeholder {
    color: #00000050;
  }
  padding: 10px;
  outline: none;
  &:focus {
    border-color: #092753c2;
    box-shadow: none;
  }
}
</style>
