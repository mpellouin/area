import * as React from 'react';
import {useColorScheme} from 'react-native';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {Colors} from '../../../Style';

type AppProps = {
  props: any;
};

function LoginSvg({props}: AppProps) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Svg
      width={358}
      height={346}
      viewBox="0 0 358 346"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_108_4285)">
        <Path
          d="M228.338 77.424H209.29v160.787a19.05 19.05 0 01-1.477 7.352 19.217 19.217 0 01-4.206 6.232 19.412 19.412 0 01-6.295 4.164 19.578 19.578 0 01-7.425 1.462H44.255v.184c0 2.523.502 5.021 1.477 7.352a19.205 19.205 0 004.206 6.232 19.407 19.407 0 006.294 4.164 19.58 19.58 0 007.425 1.462h164.681c2.548 0 5.071-.497 7.425-1.462a19.412 19.412 0 006.295-4.164 19.233 19.233 0 004.206-6.232 19.048 19.048 0 001.476-7.352V96.634c0-5.095-2.044-9.981-5.682-13.584a19.503 19.503 0 00-13.72-5.626zM318.636 332.94c.337.015.671-.072.956-.251.285-.179.508-.44.638-.749a1.62 1.62 0 00-.401-1.825l-.113-.444.045-.107a4.387 4.387 0 011.636-1.947 4.458 4.458 0 014.898.018 4.385 4.385 0 011.622 1.959c1.333 3.181 3.032 6.367 3.45 9.73a12.834 12.834 0 01-.23 4.454 51.482 51.482 0 004.77-21.564 49.48 49.48 0 00-.314-5.59 51.368 51.368 0 00-.721-4.533 52.297 52.297 0 00-10.52-22.26 14.04 14.04 0 01-5.871-6.031 10.588 10.588 0 01-.98-2.914c.286.038 1.078-4.272.863-4.537.398-.598 1.111-.896 1.546-1.48 2.164-2.904 5.145-2.397 6.701 1.55 3.324 1.661 3.356 4.416 1.316 7.066-1.297 1.685-1.476 3.966-2.614 5.771.117.148.239.292.356.441a52.787 52.787 0 015.572 8.74 21.781 21.781 0 011.325-10.206c1.269-3.03 3.646-5.581 5.739-8.2a4.565 4.565 0 012.161-1.509 4.602 4.602 0 012.643-.066 4.557 4.557 0 012.236 1.398 4.487 4.487 0 011.074 2.392l.013.116c-.311.174-.616.358-.913.553a2.193 2.193 0 00-.287 3.452 2.25 2.25 0 001.187.572l.046.007a21.854 21.854 0 01-.586 3.289c2.685 10.283-3.113 14.028-11.391 14.196-.183.093-.361.186-.544.274a53.48 53.48 0 012.933 13.668c.213 2.75.2 5.513-.037 8.262l.014-.097a13.497 13.497 0 014.662-7.808c3.588-2.918 8.657-3.993 12.528-6.339a2.587 2.587 0 012.759-.006 2.52 2.52 0 011.167 2.475l-.016.103a14.888 14.888 0 00-2.595 1.355 2.22 2.22 0 00-.832 1.015 2.19 2.19 0 00.546 2.437 2.24 2.24 0 001.186.572l.046.007.093.014a21.969 21.969 0 01-4.09 6.342c-1.679 8.976-8.892 9.828-16.607 7.214h-.005a53.526 53.526 0 01-3.659 10.578h-13.074c-.046-.144-.089-.293-.131-.436 1.21.075 2.425.003 3.618-.214-.97-1.178-1.94-2.366-2.91-3.544a.68.68 0 01-.061-.07c-.492-.603-.989-1.201-1.481-1.804v-.001a21.373 21.373 0 01.637-5.488h.001z"
          fill="#F2F2F2"
        />
        <Path
          d="M174.643 55.552a5.956 5.956 0 001.842 1.773 6.025 6.025 0 004.981.604 5.99 5.99 0 002.22-1.28l27.181 12.14 5.24-6.617-32.389-14.187a6.004 6.004 0 00-3.926-1.596 6.01 6.01 0 00-4.006 1.389 5.9 5.9 0 00-2.064 3.672 5.865 5.865 0 00.921 4.102z"
          fill="#A0616A"
        />
        <Path
          d="M291.289 63.123l2.696 15.125a5.094 5.094 0 01-1.007 4.039 5.177 5.177 0 01-1.638 1.376 5.23 5.23 0 01-2.06.601l-45.806 3.567-53.844-23.859 6.431-12.087 46.741 14.655 48.487-3.417z"
          fill={isDarkMode ? Colors.majorD : Colors.majorW}
        />
        <Path
          d="M184.083 52.284H19.403C8.687 52.284 0 60.884 0 71.494v160.971c0 10.609 8.687 19.21 19.402 19.21h164.681c10.716 0 19.403-8.601 19.403-19.21V71.494c0-10.61-8.687-19.21-19.403-19.21z"
          fill="#F2F2F2"
        />
        <Path
          d="M19.403 56.234c-2.024 0-4.029.395-5.898 1.162a15.424 15.424 0 00-5 3.308 15.249 15.249 0 00-3.342 4.95 15.128 15.128 0 00-1.173 5.84v160.971c0 4.047 1.624 7.928 4.514 10.79a15.49 15.49 0 0010.899 4.47h105.103a75.644 75.644 0 0028.697-5.652 75.04 75.04 0 0024.328-16.094 74.194 74.194 0 0016.256-24.088 73.597 73.597 0 005.708-28.412V71.494a15.12 15.12 0 00-1.173-5.84 15.243 15.243 0 00-3.341-4.95 15.42 15.42 0 00-5-3.308 15.546 15.546 0 00-5.898-1.162H19.403z"
          fill="#fff"
        />
        <Path
          d="M147.779 105.086H55.347a3.213 3.213 0 01-2.261-.927 3.15 3.15 0 01-.937-2.239c0-.84.337-1.645.937-2.239a3.214 3.214 0 012.26-.927h92.433c.848 0 1.661.333 2.261.927.6.594.937 1.399.937 2.239a3.15 3.15 0 01-.937 2.239c-.6.594-1.413.927-2.261.927zM147.779 172.606H55.347a3.214 3.214 0 01-2.261-.928 3.148 3.148 0 01-.937-2.238c0-.84.337-1.646.937-2.239a3.214 3.214 0 012.26-.928h92.433c.848 0 1.661.334 2.261.928.6.593.937 1.399.937 2.239 0 .839-.337 1.645-.937 2.238-.6.594-1.413.928-2.261.928zM185.313 138.868h-167.5a3.213 3.213 0 01-2.262-.927 3.15 3.15 0 01-.937-2.239c0-.84.337-1.645.937-2.239a3.213 3.213 0 012.261-.927h167.501c.848 0 1.662.333 2.262.927.599.594.936 1.399.936 2.239 0 .84-.337 1.645-.936 2.239-.6.594-1.414.927-2.262.927z"
          fill="#F2F2F2"
        />
        <Path
          d="M285.502 129.786l-16.686 35.197 64.189-6.437-13.399-33.788-34.104 5.028zM300.425 332.081l-6.086-.051-2.694-23.783 8.982.075-.202 23.759z"
          fill="#A0616A"
        />
        <Path
          d="M280.931 341.663a2.686 2.686 0 00.782 1.911 2.736 2.736 0 001.916.806l12.1.1 2.118-4.251.778 4.273 4.566.041-1.153-15.24-1.588-.105-6.479-.442-2.091-.138-.036 4.312-9.72 6.527a2.677 2.677 0 00-1.193 2.206z"
          fill="#2F2E41"
        />
        <Path
          d="M233.074 332.109l-5.802-1.82 4.483-23.517 8.563 2.684-7.244 22.653z"
          fill="#A0616A"
        />
        <Path
          d="M211.598 335.596a2.675 2.675 0 00.179 2.054 2.722 2.722 0 001.593 1.329l11.536 3.615 3.287-3.447-.525 4.31 4.352 1.368 3.421-14.903-1.487-.562-6.062-2.307-1.957-.741-1.315 4.111-11.228 3.412a2.717 2.717 0 00-1.794 1.761zM330.081 148.648l-58.363 10.588s-9.361 6.933-6.857 9.416c2.504 2.483 2.893 2.099 1.247 3.727-1.645 1.629-5.202 3.807-5.237 5.232-.035 1.425-26.153 65.353-26.153 65.353s2.902-1.436.726.719c-2.177 2.155-2.177 3.935-2.177 3.935l-10.157 67.894 16.495.962 16.152-61.898 36.028-57.826s3.574 51.566 3.724 54.996c.15 3.429 2.327-.88.15 3.429-2.176 4.31-3.627 1.437-2.176 4.31 1.451 2.873-5.227 61.367-5.227 61.367h15.056l32.291-121.241s11.489-34.662-5.522-50.963z"
          fill="#2F2E41"
        />
        <Path
          d="M312.888 51.67l-23.379-2.405-6.057 7.786-7.056 3.72a17.534 17.534 0 00-7.1 6.893 17.303 17.303 0 00-2.197 9.601l8.246 47.493s-6.965 15.529-2.176 19.394c4.789 3.865-3.703 13.437 6.529 8.62 10.232-4.818 54.412.718 54.412.718l-9.432-26.577 7.046-26.115.775-21.898a18.418 18.418 0 00-3.488-11.446 18.728 18.728 0 00-9.817-6.961l-.985-.295-5.321-8.528z"
          fill={isDarkMode ? Colors.majorD : Colors.majorW}
        />
        <Path
          d="M345.074 33.925c.153 6.524-2.31 12.842-5.847 18.39-1.052-3.239-2.941-6.187-4.912-8.997a27.772 27.772 0 01-3.011 17.738 3.772 3.772 0 01-.322.205c-2.884 1.717-6.54 2.413-9.659 1.173 6.445-6.88 7.265-18.277 1.862-25.992-1.53-2.19-3.509-4.126-4.457-6.618-1.496-3.975-.058-8.352.85-12.497.848-3.857.997-8.448-1.617-11.275.279-.395.659-.71 1.102-.911.442-.202.93-.283 1.415-.237 1.612.226 2.785 1.613 3.532 3.041.747 1.429 1.24 3.012 2.281 4.246 1.928 2.309 5.212 2.855 7.98 4.072 6.701 2.955 10.642 10.402 10.803 17.662z"
          fill="#2F2E41"
        />
        <Path
          d="M172.413 344.535a.857.857 0 00.532.791.894.894 0 00.331.064h183.759c.229 0 .449-.09.61-.25a.852.852 0 00-.61-1.46H173.276a.875.875 0 00-.611.25.857.857 0 00-.252.605z"
          fill="#CCC"
        />
        <Path
          d="M346.521 185.139c3.606 0 6.529-2.895 6.529-6.465s-2.923-6.465-6.529-6.465-6.53 2.895-6.53 6.465 2.924 6.465 6.53 6.465z"
          fill={isDarkMode ? Colors.majorD : Colors.majorW}
        />
        <Path
          d="M288.662 30.195c.383-1.327-2.257 6.785-.983 6.931 5.801.66 13.765 4.09 17.806 5.69.182-.02.364-.042.54-.068.434-.047.856-.115 1.274-.193 9.409-1.763 13.027-16.072 13.027-16.203 0-.643-1.56-18.311-4.016-18.573a18.286 18.286 0 00-1.943-.104h-6.096a28.592 28.592 0 00-3.826-.55h-.011c-12.272-.925-21.948 6.48-21.044 15.492.006.01.016.02.022.031.262.387.492.753.696 1.104.198.329.363.643.508.94 1.118 2.302-1.757 5.198.15 5.738 2.535.719-6.669 24.346 3.367 24.346-4.882 1.374-.528-20.92.529-24.581z"
          fill="#2F2E41"
        />
        <Path
          d="M299.617 44.058c7.97 0 14.432-6.398 14.432-14.29 0-7.891-6.462-14.289-14.432-14.289-7.971 0-14.433 6.398-14.433 14.29 0 7.891 6.462 14.289 14.433 14.289z"
          fill="#A0616A"
        />
        <Path
          d="M283.39 23.396c.241.125.477.24.718.355.251.12.503.241.754.35 4.833 2.171 8.767 2.412 11.153-.705.064-1.64.436-3.254 1.098-4.76a7.595 7.595 0 001.273 4.76h4.806c4.951 3.253 7.493 3.593 4.057 14.273-.958 2.975-4.767 20.292-3.269 22.86.434-.047 5.046-19.014 5.463-19.093 9.409-1.762 15.387-17.11 14.622-17.977a15.875 15.875 0 00-1.676-7.118 16.425 16.425 0 00-6.283-6.768 29.29 29.29 0 00-5.02-1.867l-.123-.031a29.893 29.893 0 00-4.993-.89 2.565 2.565 0 00-1.525.34c-.006 0-.006.006-.011.006a2.422 2.422 0 00-.717.632c-.342.431-.527.964-.525 1.512h-5.352c-.198 0-.396.005-.594.016a14.42 14.42 0 00-9.528 4.027 14.146 14.146 0 00-4.306 9.33 11.67 11.67 0 00-.022.748z"
          fill="#2F2E41"
        />
        <Path
          d="M314.946 18.828c5.251 0 9.508-4.215 9.508-9.414 0-5.2-4.257-9.414-9.508-9.414-5.251 0-9.508 4.215-9.508 9.414 0 5.2 4.257 9.414 9.508 9.414z"
          fill="#2F2E41"
        />
        <Path
          d="M346.594 181.34a5.867 5.867 0 00.662-4.926 5.9 5.9 0 00-1.269-2.211 5.992 5.992 0 00-2.089-1.48l.047-29.523-8.245-2.021.203 35.065a5.865 5.865 0 00.139 4.201 5.938 5.938 0 002.921 3.048 6.023 6.023 0 004.229.359 5.971 5.971 0 003.402-2.512z"
          fill="#A0616A"
        />
        <Path
          d="M305.767 72.89l12.829-8.632a5.224 5.224 0 014.135-.746c.703.168 1.363.48 1.938.915a5.143 5.143 0 011.398 1.614l22.058 39.907.084 58.405-13.771-.855-5.653-48.218-23.018-42.39z"
          fill={isDarkMode ? Colors.majorD : Colors.majorW}
        />
        <Path
          d="M207.232 205.344H70.115a11.302 11.302 0 00-7.951 3.261 11.078 11.078 0 00-3.294 7.872c0 2.953 1.185 5.785 3.294 7.873a11.302 11.302 0 007.951 3.261h137.117c2.983 0 5.843-1.173 7.952-3.261a11.077 11.077 0 003.293-7.873c0-2.952-1.184-5.784-3.293-7.872a11.303 11.303 0 00-7.952-3.261z"
          fill="#fff"
        />
        <Path
          d="M207.232 228.329H70.115a12.03 12.03 0 01-8.464-3.471 11.793 11.793 0 01-3.506-8.381c0-3.143 1.26-6.157 3.506-8.38a12.03 12.03 0 018.464-3.471h137.117a12.03 12.03 0 018.465 3.471 11.792 11.792 0 013.506 8.38c0 3.144-1.261 6.158-3.506 8.381a12.03 12.03 0 01-8.465 3.471zM70.115 206.062c-2.79 0-5.465 1.098-7.438 3.051a10.362 10.362 0 00-3.081 7.364c0 2.763 1.108 5.412 3.08 7.365a10.575 10.575 0 007.44 3.051h137.116c2.79 0 5.466-1.098 7.439-3.051a10.361 10.361 0 003.081-7.365 10.36 10.36 0 00-3.081-7.364 10.576 10.576 0 00-7.439-3.051H70.115z"
          fill={isDarkMode ? Colors.minorD : Colors.minorW}
        />
        <Path
          d="M215.318 253.931h-60.511a3.213 3.213 0 01-2.261-.927 3.15 3.15 0 01-.937-2.239c0-.84.337-1.645.937-2.239a3.213 3.213 0 012.261-.927h60.511c.848 0 1.661.333 2.261.927.6.594.937 1.399.937 2.239a3.15 3.15 0 01-.937 2.239c-.6.594-1.413.927-2.261.927z"
          fill={isDarkMode ? Colors.majorD : Colors.majorW}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_108_4285">
          <Path fill="#fff" d="M0 0H358V345.39H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LoginSvg;
