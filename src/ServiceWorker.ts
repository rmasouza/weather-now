type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

const register = () => {
    window.addEventListener('load', () => {
        registerValidSW();
    });
};

function registerValidSW(config?: Config) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js', { scope: `./` })
            .then( (registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            })
    }
}


export { register }
