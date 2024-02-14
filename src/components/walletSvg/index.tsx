import classes from '../index.module.scss';

type Props = {
    isActive: boolean
}
export default function WalletSvg({isActive = false}: Props) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={75} height='71.01' viewBox='0 0 75 71.01'>
            <g id='Layer_2' data-name='Layer 2'>
                <g id='Layer_1-2' data-name='Layer 1'>
                    <path
                        d='M57.65,59.27,6.81,64.69A5.89,5.89,0,0,1,.92,58.8V24.51a5.89,5.89,0,0,1,5.89-5.89L57.65,13.2a5.89,5.89,0,0,1,5.89,5.89V53.38A5.89,5.89,0,0,1,57.65,59.27Z'
                        fill='#a3a3a3'
                    />
                    <path
                        d='M6.86,65.59H6.81A6.8,6.8,0,0,1,0,58.8V24.51a6.79,6.79,0,0,1,6.74-6.79l50.89-5.43a6.81,6.81,0,0,1,6.8,6.8V53.38a6.79,6.79,0,0,1-6.75,6.79ZM6.81,19.52a5,5,0,0,0-5,5V58.8a5,5,0,0,0,4.94,5l50.88-5.42a5,5,0,0,0,5-5V19.09a5,5,0,0,0-4.94-5Z'
                        fill='#4a4a4a'
                    />
                    <circle cx='40.87' cy='32.14' r='6.46' fill='#53893f' />
                    <g id='money-active' className={isActive ? classes.activeWallet : classes.deActiveWallet}>
                        <g id='money-3'>
                            <g id='sides'>
                                <rect
                                    x='-0.68'
                                    y='15.31'
                                    width='48.25'
                                    height='32.47'
                                    rx='2.99'
                                    ry='2.99'
                                    transform='translate(-13.37 45.33) rotate(-73.92)'
                                    fill='#53893f'
                                />
                                <path
                                    d='M30.51,59.48a3.45,3.45,0,0,1-1-.14l-26-7.49A3.62,3.62,0,0,1,1,47.38L12.9,6.22a3.62,3.62,0,0,1,4.47-2.47l26,7.5a3.61,3.61,0,0,1,2.47,4.47L34,56.88A3.6,3.6,0,0,1,30.51,59.48ZM16.37,5.42a1.8,1.8,0,0,0-1.73,1.3L2.77,47.88A1.81,1.81,0,0,0,4,50.11l26,7.5a1.81,1.81,0,0,0,2.23-1.23L44.11,15.21A1.82,1.82,0,0,0,44,13.84,1.75,1.75,0,0,0,42.88,13l-26-7.5A1.73,1.73,0,0,0,16.37,5.42Z'
                                    fill='#4a4a4a'
                                />
                            </g>
                            <g id='center'>
                                <path
                                    d='M41.08,16.52,22.51,11.16c-.79,2.76-4,4.26-7.15,3.35l-9,31.38c3.16.91,5.07,3.88,4.28,6.64l24.28,7L45.35,23.16C42.2,22.25,40.29,19.27,41.08,16.52Z'
                                    fill='#72bf56'
                                />
                            </g>
                            <g id='number'>
                                <path
                                    d='M20.34,9.82a.78.78,0,0,1-.18.32.89.89,0,0,1-.31.19,1,1,0,0,1,.14.35,1,1,0,0,1,0,.38.79.79,0,0,1-.18.31.86.86,0,0,1-.28.2,1.33,1.33,0,0,1-.34.1h-.33l-.14,0-.13,0a1.69,1.69,0,0,1-.27-.1L18,11.37a3.75,3.75,0,0,1-.36-.24,4.35,4.35,0,0,1-.35-.3c-.12-.12-.24-.24-.37-.39L16.52,10l-.13.07-.31-.58.44-.25.34-.2.29-.15.27-.12a4.79,4.79,0,0,1,.74-.23,3.66,3.66,0,0,1,.75-.09l.26,0,.27.06a1.59,1.59,0,0,1,.42.19,1.08,1.08,0,0,1,.32.28.89.89,0,0,1,.18.38.94.94,0,0,1,0,.47ZM18.79,9.7l.25.06.28,0a1,1,0,0,0,.25,0,.26.26,0,0,0,.15-.14.37.37,0,0,0,0-.18.61.61,0,0,0-.09-.18.67.67,0,0,0-.15-.14A.56.56,0,0,0,19.29,9L19.1,9h-.17a2.89,2.89,0,0,0-.49.07,3.71,3.71,0,0,0-.47.16c-.16.06-.31.14-.46.21l-.44.24a4.22,4.22,0,0,0,.27.36c.1.12.21.24.32.35l.33.3c.12.09.22.17.32.23l.22.1.23.09a.65.65,0,0,0,.19,0,.33.33,0,0,0,.17,0,.39.39,0,0,0,.14-.08.57.57,0,0,0,.08-.13.33.33,0,0,0,0-.1.19.19,0,0,0,0-.12.42.42,0,0,0-.08-.12.47.47,0,0,0-.13-.11l-.17-.1-.14-.08-.14-.06Z'
                                    fill='#72bf56'
                                />
                            </g>
                        </g>
                        <g id='money-2'>
                            <g id='sides-2' data-name='sides'>
                                <rect
                                    x='8.16'
                                    y='12.7'
                                    width='48.25'
                                    height='32.47'
                                    rx='2.99'
                                    ry='2.99'
                                    transform='translate(-9.11 41.81) rotate(-59.15)'
                                    fill='#53893f'
                                />
                                <path
                                    d='M32.91,57.87a3.55,3.55,0,0,1-1.84-.51L7.83,43.48a3.6,3.6,0,0,1-1.24-4.94l22-36.78A3.61,3.61,0,0,1,33.5.51L56.74,14.39a3.59,3.59,0,0,1,1.64,2.22,3.54,3.54,0,0,1-.4,2.73L36,56.11a3.55,3.55,0,0,1-2.21,1.65A3.34,3.34,0,0,1,32.91,57.87ZM31.65,1.81a1.8,1.8,0,0,0-1.55.88l-22,36.77a1.8,1.8,0,0,0,.62,2.47L32,55.81a1.8,1.8,0,0,0,2.47-.62l22-36.78a1.76,1.76,0,0,0,.2-1.36,1.81,1.81,0,0,0-.82-1.11L32.57,2.06A1.79,1.79,0,0,0,31.65,1.81Z'
                                    fill='#4a4a4a'
                                />
                            </g>
                            <g id='center-2' data-name='center'>
                                <path
                                    d='M51.82,18.47,36.74,9.05a5.31,5.31,0,0,1-7.37,1.48L12.15,38.09a5.33,5.33,0,0,1,1.9,7.28L33.76,57.69l20-31.94A5.31,5.31,0,0,1,51.82,18.47Z'
                                    fill='#72bf56'
                                />
                            </g>
                            <g id='number-2' data-name='number'>
                                <path
                                    d='M34.81,7.44a.75.75,0,0,1-.26.27.85.85,0,0,1-.34.11,1,1,0,0,1,0,.38.83.83,0,0,1-.11.36.89.89,0,0,1-.25.26,1,1,0,0,1-.32.12,1,1,0,0,1-.35,0,1.14,1.14,0,0,1-.33-.08h0l-.12-.06-.12-.07a1.25,1.25,0,0,1-.24-.16l-.22-.19a2.89,2.89,0,0,1-.29-.32,4.39,4.39,0,0,1-.27-.39c-.09-.14-.18-.29-.27-.46l-.29-.57-.15,0L30.77,6l.48-.14.38-.1L32,5.73l.29-.05a5.27,5.27,0,0,1,.78,0,3.76,3.76,0,0,1,.74.1l.25.08.25.13a1.93,1.93,0,0,1,.36.28,1.41,1.41,0,0,1,.24.36.82.82,0,0,1,.08.41.86.86,0,0,1-.13.45ZM33.33,7l.22.12a1.53,1.53,0,0,0,.27.11l.25,0a.24.24,0,0,0,.18-.1.57.57,0,0,0,0-.18.59.59,0,0,0-.05-.19.62.62,0,0,0-.11-.17A.43.43,0,0,0,34,6.44l-.17-.09-.16,0a1.7,1.7,0,0,0-.5,0l-.5,0-.5.1-.48.12q.07.2.18.42c.07.14.14.28.22.41s.16.26.25.38.17.21.25.29l.19.16.2.14a.67.67,0,0,0,.18.07.48.48,0,0,0,.17,0,.3.3,0,0,0,.16,0,.24.24,0,0,0,.1-.1.17.17,0,0,0,0-.1.24.24,0,0,0,0-.12,1.21,1.21,0,0,0-.05-.14l-.1-.14-.14-.14-.12-.11-.12-.09Z'
                                    fill='#72bf56'
                                />
                            </g>
                        </g>
                        <g id='money-1'>
                            <g id='sides-3' data-name='sides'>
                                <rect
                                    x='16.2'
                                    y='15.92'
                                    width='48.25'
                                    height='32.47'
                                    rx='2.99'
                                    ry='2.99'
                                    transform='translate(-11.18 34.76) rotate(-41.47)'
                                    fill='#53893f'
                                />
                                <path
                                    d='M33.24,60.08H33a3.6,3.6,0,0,1-2.48-1.21L12.61,38.58a3.59,3.59,0,0,1,.32-5.09L45,5.13a3.62,3.62,0,0,1,5.1.31L68,25.72a3.61,3.61,0,0,1-.32,5.09L35.62,59.18A3.55,3.55,0,0,1,33.24,60.08ZM47.41,6a1.8,1.8,0,0,0-1.19.45L14.12,34.85A1.81,1.81,0,0,0,14,37.39L31.89,57.67a1.81,1.81,0,0,0,2.54.16l32.1-28.37a1.8,1.8,0,0,0,.15-2.54L48.76,6.64A1.76,1.76,0,0,0,47.41,6Z'
                                    fill='#4a4a4a'
                                />
                            </g>
                            <g id='center-3' data-name='center'>
                                <path
                                    d='M62,27.64,50.86,15a5.19,5.19,0,0,1-7.33-.45L19.06,36.16a5.19,5.19,0,0,1-.46,7.34L33.23,60,61.59,35A5.19,5.19,0,0,1,62,27.64Z'
                                    fill='#72bf56'
                                />
                            </g>
                            <g id='number-3' data-name='number'>
                                <path
                                    d='M49,13a.79.79,0,0,1-.36.19.86.86,0,0,1-.39,0,1.09,1.09,0,0,1-.07.4.86.86,0,0,1-.23.33.88.88,0,0,1-.35.2,1.16,1.16,0,0,1-.37,0,1.56,1.56,0,0,1-.37-.1,1.65,1.65,0,0,1-.31-.2h0l-.11-.1-.11-.11c-.06-.08-.13-.16-.19-.25a1.78,1.78,0,0,1-.17-.27,3.23,3.23,0,0,1-.2-.42,4.7,4.7,0,0,1-.16-.49q-.06-.26-.12-.57c0-.2-.09-.43-.13-.69h-.16l0-.71h1l.35,0,.32,0a4.92,4.92,0,0,1,.82.2,4.12,4.12,0,0,1,.74.34,1.67,1.67,0,0,1,.24.16l.22.21a2.29,2.29,0,0,1,.28.41,1.47,1.47,0,0,1,.14.45,1,1,0,0,1-.05.45A1,1,0,0,1,49,13ZM47.6,12l.19.2.25.19a.68.68,0,0,0,.25.11.22.22,0,0,0,.21,0,.76.76,0,0,0,.09-.18.79.79,0,0,0,0-.22.83.83,0,0,0-.06-.21.42.42,0,0,0-.11-.18.67.67,0,0,0-.15-.14.72.72,0,0,0-.15-.11,2.13,2.13,0,0,0-.49-.21l-.54-.12a4.87,4.87,0,0,0-.55-.06L46,11c0,.16,0,.32.05.49s.06.34.1.5.09.33.15.48a2,2,0,0,0,.17.39l.14.21a1.84,1.84,0,0,0,.17.22.61.61,0,0,0,.16.12.45.45,0,0,0,.18.07h.17a.28.28,0,0,0,.15-.08l.06-.08a.28.28,0,0,0,0-.13.43.43,0,0,0,0-.16.64.64,0,0,0-.06-.18.85.85,0,0,0-.1-.19l-.08-.15-.1-.14Z'
                                    fill='#72bf56'
                                />
                            </g>
                        </g>
                    </g>
                    <path
                        d='M64.88,70.11H6.81A5.89,5.89,0,0,1,.92,64.22v-42L6.81,24H64.88a5.89,5.89,0,0,1,5.89,5.89V64.22A5.89,5.89,0,0,1,64.88,70.11Z'
                        fill='#eaeaea'
                    />
                    <path
                        d='M.92,61.08V27.65l3.53,1.77a8.77,8.77,0,0,0,4,.94H61a3.15,3.15,0,0,1,3.15,3.15V60.64A3.15,3.15,0,0,1,61,63.79H6.55a6,6,0,0,1-3.62-1.21Z'
                        fill='#fff'
                    />
                    <path
                        d='M2,62.34a.44.44,0,0,1-.27-.09L.65,61.44a.47.47,0,0,1-.18-.36V59.72a.45.45,0,0,1,.45-.45.46.46,0,0,1,.46.45v1.13l.9.68a.45.45,0,0,1,.09.63A.44.44,0,0,1,2,62.34Z'
                        fill='#bababa'
                    />
                    <path
                        d='M.92,57.38a.45.45,0,0,1-.45-.45V54.14a.45.45,0,0,1,.45-.45.46.46,0,0,1,.46.45v2.79A.46.46,0,0,1,.92,57.38Zm0-5.58a.46.46,0,0,1-.45-.46V48.55a.45.45,0,0,1,.45-.45.46.46,0,0,1,.46.45v2.79A.47.47,0,0,1,.92,51.8Zm0-5.59a.45.45,0,0,1-.45-.45V43a.45.45,0,0,1,.45-.45.46.46,0,0,1,.46.45v2.79A.46.46,0,0,1,.92,46.21Zm0-5.58a.45.45,0,0,1-.45-.45v-2.8a.45.45,0,0,1,.45-.45.46.46,0,0,1,.46.45v2.8A.46.46,0,0,1,.92,40.63ZM.92,35a.45.45,0,0,1-.45-.45V31.8a.45.45,0,0,1,.45-.45.46.46,0,0,1,.46.45v2.79A.46.46,0,0,1,.92,35Z'
                        fill='#bababa'
                    />
                    <path
                        d='M.92,29.46A.45.45,0,0,1,.47,29V27.65a.43.43,0,0,1,.22-.38.46.46,0,0,1,.44,0l1.21.61a.45.45,0,0,1,.2.6.44.44,0,0,1-.61.2l-.55-.28V29A.46.46,0,0,1,.92,29.46Z'
                        fill='#bababa'
                    />
                    <path
                        d='M61,64.24H58.94a.45.45,0,0,1-.45-.45.46.46,0,0,1,.45-.46H61a1.75,1.75,0,0,0,.56,0,.45.45,0,1,1,.19.88A3.65,3.65,0,0,1,61,64.24Zm-4.82,0H53.47a.45.45,0,0,1-.45-.45.46.46,0,0,1,.45-.46H56.2a.47.47,0,0,1,.46.46A.46.46,0,0,1,56.2,64.24Zm-5.46,0H48a.45.45,0,0,1-.45-.45.46.46,0,0,1,.45-.46h2.74a.46.46,0,0,1,.45.46A.45.45,0,0,1,50.74,64.24Zm-5.47,0H42.54a.45.45,0,0,1-.45-.45.46.46,0,0,1,.45-.46h2.73a.46.46,0,0,1,.45.46A.45.45,0,0,1,45.27,64.24Zm-5.47,0H37.07a.45.45,0,0,1-.45-.45.46.46,0,0,1,.45-.46H39.8a.47.47,0,0,1,.46.46A.46.46,0,0,1,39.8,64.24Zm-5.46,0H31.61a.46.46,0,0,1-.46-.45.47.47,0,0,1,.46-.46h2.73a.46.46,0,0,1,.45.46A.45.45,0,0,1,34.34,64.24Zm-5.47,0H26.14a.45.45,0,0,1-.45-.45.46.46,0,0,1,.45-.46h2.73a.46.46,0,0,1,.45.46A.45.45,0,0,1,28.87,64.24Zm-5.46,0H20.67a.45.45,0,0,1-.45-.45.46.46,0,0,1,.45-.46h2.74a.46.46,0,0,1,.45.46A.45.45,0,0,1,23.41,64.24Zm-5.47,0H15.21a.46.46,0,0,1-.46-.45.47.47,0,0,1,.46-.46h2.73a.46.46,0,0,1,.45.46A.45.45,0,0,1,17.94,64.24Zm-5.47,0H9.74a.45.45,0,0,1-.45-.45.46.46,0,0,1,.45-.46h2.73a.46.46,0,0,1,.45.46A.45.45,0,0,1,12.47,64.24ZM7,64.24H6.55a6.51,6.51,0,0,1-2.39-.46.45.45,0,0,1,.33-.84,5.58,5.58,0,0,0,2.06.39H7a.46.46,0,0,1,.45.46A.45.45,0,0,1,7,64.24Zm56.77-1.66a.54.54,0,0,1-.21,0,.45.45,0,0,1-.18-.61,2.73,2.73,0,0,0,.32-1.28V59.46a.45.45,0,1,1,.9,0v1.18a3.61,3.61,0,0,1-.43,1.7A.44.44,0,0,1,63.78,62.58Zm.38-5.4a.45.45,0,0,1-.45-.45V54a.45.45,0,1,1,.9,0v2.74A.45.45,0,0,1,64.16,57.18Zm0-5.47a.45.45,0,0,1-.45-.45V48.53a.45.45,0,1,1,.9,0v2.73A.45.45,0,0,1,64.16,51.71Zm0-5.46a.46.46,0,0,1-.45-.46V43.06a.45.45,0,0,1,.9,0v2.73A.46.46,0,0,1,64.16,46.25Zm0-5.47a.45.45,0,0,1-.45-.45V37.59a.45.45,0,0,1,.9,0v2.74A.45.45,0,0,1,64.16,40.78Zm0-5.47a.45.45,0,0,1-.45-.45V33.51a2.69,2.69,0,0,0-.26-1.15.45.45,0,1,1,.82-.38,3.52,3.52,0,0,1,.34,1.53v1.35A.45.45,0,0,1,64.16,35.31Zm-2.33-4.39h-.11a2.44,2.44,0,0,0-.71-.1h-1.9a.45.45,0,1,1,0-.9H61A3.67,3.67,0,0,1,62,30a.47.47,0,0,1,.32.56A.46.46,0,0,1,61.83,30.92Zm-5.45-.11H53.64a.45.45,0,1,1,0-.9h2.74a.45.45,0,1,1,0,.9Zm-5.47,0H48.18a.45.45,0,1,1,0-.9h2.73a.45.45,0,0,1,0,.9Zm-5.47,0H42.71a.45.45,0,1,1,0-.9h2.73a.45.45,0,1,1,0,.9Zm-5.46,0H37.24a.45.45,0,1,1,0-.9H40a.45.45,0,0,1,0,.9Zm-5.47,0H31.78a.45.45,0,0,1,0-.9h2.73a.45.45,0,1,1,0,.9Zm-5.47,0H26.31a.45.45,0,0,1,0-.9H29a.45.45,0,1,1,0,.9Zm-5.46,0H20.85a.45.45,0,1,1,0-.9h2.73a.45.45,0,1,1,0,.9Zm-5.47,0H15.38a.45.45,0,1,1,0-.9h2.73a.45.45,0,0,1,0,.9Zm-5.46,0H9.91a.45.45,0,0,1,0-.9h2.74a.45.45,0,0,1,0,.9Zm-5.47-.08H7.12a9.14,9.14,0,0,1-2.74-.83.45.45,0,0,1-.21-.6.45.45,0,0,1,.6-.21,8.36,8.36,0,0,0,2.48.75.45.45,0,0,1-.07.9Z'
                        fill='#bababa'
                    />
                    <path
                        d='M64.88,71H6.81A6.64,6.64,0,0,1,0,64.55V29.6c0-.2,0-.45,0-.75-.06-4,.1-6.49,1.12-7.45s2.58-.07,3.76.73a5.26,5.26,0,0,0,1.92,1H64.88a6.64,6.64,0,0,1,6.79,6.46v7.73a.9.9,0,1,1-1.8,0V29.6a4.84,4.84,0,0,0-5-4.66H6.81a5.78,5.78,0,0,1-2.93-1.31,6.2,6.2,0,0,0-1.55-.88c-.28.37-.58,1.74-.51,6.07,0,.31,0,.58,0,.78V64.55a4.83,4.83,0,0,0,5,4.66H64.88a4.84,4.84,0,0,0,5-4.66V45.37a.9.9,0,1,1,1.8,0V64.55A6.64,6.64,0,0,1,64.88,71Z'
                        fill='#4a4a4a'
                    />
                    <rect x='51.51' y='39.4' width='21.68' height='15.13' rx='3.83' ry='3.83' fill='#eaeaea' />
                    <rect x='55.25' y='41.78' width='18.85' height='12.75' rx='3.83' ry='3.83' fill='#f7f7f7' />
                    <path
                        d='M70.64,55.43H58.71a4.36,4.36,0,0,1-4.36-4.36V45.24a4.37,4.37,0,0,1,4.36-4.37H70.64A4.37,4.37,0,0,1,75,45.24v5.83A4.37,4.37,0,0,1,70.64,55.43ZM58.71,42.68a2.56,2.56,0,0,0-2.56,2.56v5.83a2.56,2.56,0,0,0,2.56,2.55H70.64a2.55,2.55,0,0,0,2.55-2.55V45.24a2.56,2.56,0,0,0-2.55-2.56Z'
                        fill='#4a4a4a'
                    />
                    <g id='Ellipse_191' data-name='Ellipse 191'>
                        <circle cx='62.31' cy='48.04' r='2.67' fill='#bababa' />
                        <path
                            d='M62.31,51.61A3.58,3.58,0,1,1,65.89,48,3.57,3.57,0,0,1,62.31,51.61Zm0-5.34A1.77,1.77,0,1,0,64.08,48,1.77,1.77,0,0,0,62.31,46.27Z'
                            fill='#4a4a4a'
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
}
