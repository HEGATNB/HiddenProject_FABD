const emailInput = document.getElementById('email');

emailInput.addEventListener('input',validateEmail)

function validateEmail(){
    const regex = /[A-Za-z0-9\.]{2-10}@[a-z0-9]\.[a-z]{2-3}/
    if (regex.test(emailInput.value))
    {
        removeError()
        return true
    }
    else
    {
        showError(emailInput,"Email введен неправильно")
        return false
    }
}

function showError(input,message){
    const form= input.parentElement;
    const errorElement = form.querySelector('.error') | document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    form.appendChild(errorElement);
    input.style.borderColor = 'red';
}

function removeError(input){
    const form = input.parentElement
    const errorElement = form.querySelector('error')
    if (errorElement){
        form.removeChild(errorElement)
    }
    inputStyle.borderColor('purple')
}
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        this.setTheme(this.currentTheme);
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateIcon();
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
    
    updateIcon() {
        const icon = this.themeToggle?.querySelector('.theme-toggle__icon');
        if (icon) {
            icon.textContent = this.currentTheme === 'dark' ? '☀️' : '🌓';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    new ThemeManager();
    
});