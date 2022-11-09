import {useEffect} from 'react';
import {redirect} from 'react-router-dom';
import './index.scss';

function Apk() {
    useEffect(() => {
        fetch('/area/mobile/android/app/build/outputs/apk/release/app-release.apk').then((res) => {
            res.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let downloadApk = document.createElement('a');
                downloadApk.href = fileURL;
                downloadApk.download = 'app-release.apk';
                downloadApk.click();
            });
        });
    });

    return <></>;
}

export default Apk;
