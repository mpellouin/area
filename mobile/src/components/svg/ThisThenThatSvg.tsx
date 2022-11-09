import * as React from 'react';
import {useColorScheme} from 'react-native';
import Svg, {Rect, Path, Mask} from 'react-native-svg';

import {Colors} from './../../../Style';

type AppProps = {
  props?: any;
};

function ThisThenThatSvg({props}: AppProps) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Svg
      width={284}
      height={69}
      viewBox="0 0 284 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={0.5}
        y={0.5}
        width={124}
        height={29}
        rx={7.5}
        stroke={isDarkMode ? '#A9A9A9' : Colors.textW}
      />
      <Rect
        x={159.5}
        y={39.5}
        width={124}
        height={29}
        rx={7.5}
        stroke={isDarkMode ? '#A9A9A9' : Colors.textW}
      />
      <Path
        stroke={isDarkMode ? '#A9A9A9' : Colors.textW}
        d="M125 15.5L136 15.5"
      />
      <Path
        stroke={isDarkMode ? '#A9A9A9' : Colors.textW}
        d="M140.5 20L140.5 50"
      />
      <Mask id="a" fill="#fff">
        <Path d="M136 15a5 5 0 015 5h-5v-5z" />
      </Mask>
      <Path
        d="M136 14a6 6 0 016 6h-2a4 4 0 00-4-4v-2zm5 6h-5 5zm-5 0v-5 5zm0-6a6 6 0 016 6h-2a4 4 0 00-4-4v-2z"
        fill={isDarkMode ? '#A9A9A9' : Colors.textW}
        mask="url(#a)"
      />
      <Mask id="b" fill="#fff">
        <Path d="M140 49.5h5v5a5 5 0 01-5-5z" />
      </Mask>
      <Path
        d="M140 49.5h5-5zm5 6a6 6 0 01-6-6h2a4 4 0 004 4v2zm0 0a6 6 0 01-6-6h2a4 4 0 004 4v2zm0-6v5-5z"
        fill={isDarkMode ? '#A9A9A9' : Colors.textW}
        mask="url(#b)"
      />
      <Path
        d="M159 54l-5-2.887v5.774L159 54zm-14 .5h9.5v-1H145v1zM40.656 8.203V21H38.45V8.203h2.206zM46.053 21h-2.118V10.576c0-.709.131-1.304.395-1.784.27-.486.653-.853 1.151-1.099.498-.252 1.087-.378 1.767-.378.211 0 .419.015.624.044.205.024.404.062.598.115l-.053 1.634a2.428 2.428 0 00-.387-.061 5.094 5.094 0 00-.44-.018c-.321 0-.6.062-.834.185-.229.117-.404.29-.528.518-.117.229-.175.51-.175.844V21zm1.96-9.51v1.547h-5.537V11.49h5.537zm11.074-3.287V21h-2.189V8.203h2.189zm4.016 0v1.758H52.917V8.203h10.186zm3.569-.703V21h-2.11V7.5h2.11zm-.37 8.394l-.685-.01a6.201 6.201 0 01.273-1.819c.181-.556.433-1.04.755-1.45a3.365 3.365 0 012.699-1.3c.469 0 .89.064 1.265.193.381.129.71.337.985.624.275.281.483.65.624 1.107.146.451.22 1.002.22 1.653V21H70.31v-6.126c0-.457-.068-.82-.203-1.09a1.171 1.171 0 00-.57-.58c-.253-.123-.56-.184-.924-.184-.38 0-.718.076-1.01.228a2.11 2.11 0 00-.721.624c-.194.264-.34.568-.44.914-.093.346-.14.715-.14 1.108zM76.85 11.49V21h-2.127v-9.51h2.127zm-2.268-2.496c0-.322.106-.589.316-.8.217-.216.516-.325.897-.325.375 0 .67.109.888.325.216.211.325.478.325.8 0 .317-.109.58-.325.791-.217.211-.513.317-.888.317-.38 0-.68-.106-.897-.317a1.073 1.073 0 01-.316-.79zm9.923 9.43c0-.21-.053-.4-.158-.57-.106-.176-.308-.334-.607-.475-.293-.14-.726-.27-1.3-.387a11.221 11.221 0 01-1.39-.395 4.408 4.408 0 01-1.072-.572 2.404 2.404 0 01-.694-.79 2.19 2.19 0 01-.246-1.055c0-.387.085-.753.255-1.099.17-.346.413-.65.73-.914.316-.264.7-.472 1.15-.624a4.816 4.816 0 011.53-.228c.797 0 1.48.134 2.048.404.574.263 1.014.624 1.318 1.08.305.452.457.962.457 1.53h-2.118a1.35 1.35 0 00-.193-.703 1.346 1.346 0 00-.563-.536c-.252-.14-.568-.211-.949-.211-.363 0-.665.059-.905.176-.234.111-.41.258-.528.44-.11.18-.166.38-.166.597 0 .158.029.302.087.43.065.123.17.238.317.343.146.1.346.194.598.281.257.088.58.173.966.255.727.153 1.35.349 1.872.59.528.234.932.538 1.213.913.282.37.422.838.422 1.407 0 .421-.09.808-.272 1.16a2.631 2.631 0 01-.774.905c-.34.252-.747.448-1.222.589-.468.14-.996.21-1.582.21-.86 0-1.59-.152-2.188-.456-.598-.31-1.052-.706-1.362-1.187-.305-.486-.457-.99-.457-1.512h2.047c.024.393.132.707.326.94.199.23.445.396.738.502.299.1.606.15.923.15.38 0 .7-.05.958-.15.258-.106.454-.246.589-.422.135-.182.202-.387.202-.615zM187.565 47.203V60h-2.188V47.203h2.188zm4.017 0v1.758h-10.186v-1.758h10.186zm3.568-.703V60h-2.109V46.5h2.109zm-.369 8.394l-.685-.01a6.198 6.198 0 01.272-1.819 4.68 4.68 0 01.756-1.45 3.365 3.365 0 012.698-1.3c.469 0 .891.064 1.266.193.381.129.709.337.984.624.276.281.484.65.624 1.107.147.451.22 1.002.22 1.653V60h-2.127v-6.126c0-.457-.067-.82-.202-1.09a1.171 1.171 0 00-.571-.58c-.252-.123-.56-.184-.923-.184a2.16 2.16 0 00-1.011.228c-.287.152-.527.36-.721.624a2.87 2.87 0 00-.439.914 4.206 4.206 0 00-.141 1.108zm12.472 5.282c-.703 0-1.339-.114-1.907-.343a4.214 4.214 0 01-1.442-.976 4.334 4.334 0 01-.905-1.467 5.138 5.138 0 01-.316-1.82v-.351c0-.744.108-1.418.325-2.022.217-.603.518-1.119.905-1.547a3.895 3.895 0 011.371-.993 4.268 4.268 0 011.714-.342c.68 0 1.274.114 1.784.342.51.229.932.551 1.266.967.34.41.592.9.756 1.468.17.568.255 1.195.255 1.88v.906h-7.348v-1.52h5.256v-.168a2.972 2.972 0 00-.229-1.072 1.811 1.811 0 00-.624-.808c-.281-.206-.656-.308-1.125-.308-.351 0-.665.076-.94.228a1.86 1.86 0 00-.677.642 3.379 3.379 0 00-.422 1.02c-.094.392-.14.835-.14 1.327v.351c0 .416.055.803.167 1.16.117.352.287.66.509.923.223.264.493.472.809.624.316.147.677.22 1.081.22.51 0 .964-.102 1.362-.307a3.117 3.117 0 001.037-.87l1.117 1.08a4.356 4.356 0 01-.8.862c-.328.27-.73.489-1.204.659-.469.17-1.014.255-1.635.255zm7.559-7.656V60h-2.119v-9.51h1.995l.124 2.03zm-.378 2.374l-.686-.01a6.21 6.21 0 01.281-1.854 4.581 4.581 0 01.774-1.45 3.411 3.411 0 011.195-.932 3.525 3.525 0 011.547-.334c.457 0 .87.065 1.239.194.375.123.695.325.958.606.27.282.475.648.615 1.099.141.445.211.993.211 1.643V60h-2.127v-6.152c0-.457-.067-.818-.202-1.081a1.13 1.13 0 00-.571-.572c-.246-.117-.554-.175-.923-.175-.363 0-.688.076-.975.228-.288.152-.531.36-.73.624a3.019 3.019 0 00-.448.914 3.759 3.759 0 00-.158 1.108zm17.833-7.69V60h-2.189V47.203h2.189zm4.016 0v1.757h-10.186v-1.758h10.186zm3.569-.704V60h-2.11V46.5h2.11zm-.37 8.394l-.685-.01a6.231 6.231 0 01.272-1.819 4.68 4.68 0 01.756-1.45 3.365 3.365 0 012.698-1.3c.469 0 .891.064 1.266.193.381.129.709.337.984.624.276.281.484.65.624 1.107.147.451.22 1.002.22 1.653V60h-2.127v-6.126c0-.457-.067-.82-.202-1.09a1.171 1.171 0 00-.571-.58c-.252-.123-.56-.184-.923-.184a2.16 2.16 0 00-1.011.228c-.287.152-.527.36-.721.624a2.891 2.891 0 00-.439.914 4.206 4.206 0 00-.141 1.108zm13.641 3.199v-4.535c0-.34-.061-.633-.185-.88a1.29 1.29 0 00-.562-.57c-.246-.135-.557-.203-.932-.203a2.11 2.11 0 00-.896.176 1.45 1.45 0 00-.589.475c-.141.199-.211.425-.211.676h-2.109c0-.375.09-.738.272-1.09.182-.351.445-.665.791-.94a3.96 3.96 0 011.239-.65 5.161 5.161 0 011.618-.237c.714 0 1.347.12 1.898.36.557.24.993.603 1.31 1.09.322.48.483 1.084.483 1.81v4.228c0 .433.029.823.088 1.169.064.34.155.635.272.887V60h-2.171a3.805 3.805 0 01-.237-.87 7.068 7.068 0 01-.079-1.037zm.308-3.876l.017 1.31h-1.52c-.393 0-.739.038-1.037.114-.299.07-.548.175-.747.316-.2.14-.349.31-.449.51a1.5 1.5 0 00-.149.677c0 .252.058.483.176.694.117.205.287.366.509.483.229.117.504.176.827.176.433 0 .811-.088 1.133-.264a2.33 2.33 0 00.774-.659c.187-.264.287-.512.299-.747l.685.94a3.2 3.2 0 01-.36.774c-.17.275-.393.54-.668.791-.27.246-.595.448-.976.606-.375.159-.808.238-1.3.238-.622 0-1.175-.123-1.662-.37a2.95 2.95 0 01-1.142-1.01 2.616 2.616 0 01-.413-1.45c0-.504.093-.95.281-1.336.193-.393.475-.72.844-.985.375-.263.832-.462 1.371-.597a7.334 7.334 0 011.846-.211h1.661zm8.393-3.727v1.547h-5.361V50.49h5.361zm-3.814-2.329h2.118v9.211c0 .293.041.519.123.677a.658.658 0 00.36.307c.153.053.331.08.536.08.147 0 .288-.01.422-.027.135-.017.243-.035.326-.053l.008 1.618c-.175.052-.381.1-.615.14a4.514 4.514 0 01-.791.062c-.486 0-.917-.085-1.292-.255a1.903 1.903 0 01-.879-.853c-.211-.392-.316-.914-.316-1.564V48.16z"
        fill={isDarkMode ? '#A9A9A9' : Colors.textW}
      />
    </Svg>
  );
}

export default ThisThenThatSvg;