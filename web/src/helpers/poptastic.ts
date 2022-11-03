export const poptastic = (url: string, navigate: any) => {
    var newWindow = window.open(url, 'name', 'height=600,width=450') as Window;
    newWindow.focus();
    window.addEventListener('message', (event) => {
        if (event.data !== 'failure') {
            navigate('/areas');
        }
    });
};
