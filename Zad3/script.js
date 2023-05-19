const registrationForm = document.getElementById('registrationForm');
        const loginInput = document.getElementById('login');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const showAdditionalFieldsCheckbox = document.getElementById('showAdditionalFields');
        const additionalFields = document.getElementById('additionalFields');
        const phoneInput = document.getElementById('phone');
        const birthdateInput = document.getElementById('birthdate');
        const registeredUsersTable = document.getElementById('registeredUsersTable');

        let registeredUsers = [];

        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (validateForm()) {
                addUserToList();
                clearForm();
            }
        });

        showAdditionalFieldsCheckbox.addEventListener('change', function () {
            additionalFields.style.display = showAdditionalFieldsCheckbox.checked ? 'block' : 'none';
        });

        function validateForm() {
            let isValid = true;

            const login = loginInput.value.trim();
            if (login.length < 3) {
                displayError(loginInput, 'Login musi mieć co najmniej 3 znaki');
                isValid = false;
            } else {
                hideError(loginInput);
            }

            const email = emailInput.value.trim();
            if (!validateEmail(email)) {
                displayError(emailInput, 'Podaj poprawny adres email');
                isValid = false;
            } else {
                hideError(emailInput);
            }

            const password = passwordInput.value;
            if (!validatePassword(password)) {
                displayError(passwordInput, 'Hasło musi zawierać co najmniej 8 znaków');
                isValid = false;
            } else {
                hideError(passwordInput);
            }

            const confirmPassword = confirmPasswordInput.value;
            if (confirmPassword !== password) {
                displayError(confirmPasswordInput, 'Hasła nie są identyczne');
                isValid = false;
            } else {
                hideError(confirmPasswordInput);
            }

            if (showAdditionalFieldsCheckbox.checked) {
                const phone = phoneInput.value.trim();
                if (!validatePhone(phone)) {
                    displayError(phoneInput, 'Podaj poprawny numer telefonu');
                    isValid = false;
                } else {
                    hideError(phoneInput);
                }

                const birthdate = birthdateInput.value;
                if (!validateBirthdate(birthdate)) {
                    displayError(birthdateInput, 'Musisz mieć ukończone 18 lat');
                    isValid = false;
                } else {
                    hideError(birthdateInput);
                }
            }

            return isValid;
        }

        function displayError(input, message) {
            const errorSpan = input.nextElementSibling;
            errorSpan.innerText = message;
            input.classList.add('error');
        }

        function hideError(input) {
            const errorSpan = input.nextElementSibling;
            errorSpan.innerText = '';
            input.classList.remove('error');
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validatePassword(password) {
            return password.length >= 8;
        }

        function validatePhone(phone) {
            const phoneRegex = /^\d+$/;
            return phoneRegex.test(phone);
        }

        function validateBirthdate(birthdate) {
            const currentDate = new Date();
            const selectedDate = new Date(birthdate);
            const yearsDiff = currentDate.getFullYear() - selectedDate.getFullYear();
            return yearsDiff >= 18;
        }

        function addUserToList() {
            const login = loginInput.value.trim();
            const email = emailInput.value.trim();

            registeredUsers.push({ login, email });

            const newRow = registeredUsersTable.insertRow();
            const loginCell = newRow.insertCell();
            const emailCell = newRow.insertCell();

            loginCell.textContent = login;
            emailCell.textContent = email;
        }

        function clearForm() {
            registrationForm.reset();
            hideError(loginInput);
            hideError(emailInput);
            hideError(passwordInput);
            hideError(confirmPasswordInput);
            hideError(phoneInput);
            hideError(birthdateInput);
        }