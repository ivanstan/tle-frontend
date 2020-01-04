import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RedocStandalone} from 'redoc';
import {defaultTheme} from "./components/Theme";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <div style={{width: 200}}>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 306.3 378.7695">
                        <defs>
                            <clipPath id="clip-path" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M404.3,191.9l7-4.1a1.2683,1.2683,0,0,0,.1.6l-7,4.1A1.2683,1.2683,0,0,1,404.3,191.9Z"/>
                            </clipPath>
                            <clipPath id="clip-path-2" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M404.3,192.5l7-4.1a3.5241,3.5241,0,0,0,1.4,2c.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2A3.5241,3.5241,0,0,1,404.3,192.5Z"/>
                            </clipPath>
                            <clipPath id="clip-path-3" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M333.2,38.2a13.18,13.18,0,0,1-5.5-7.4"/>
                            </clipPath>
                            <clipPath id="clip-path-4" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M327.6,30.8a10.4735,10.4735,0,0,1-.5-3"/>
                            </clipPath>
                            <clipPath id="clip-path-5" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M431.6,208.4l7-4.1c.1.1.3.2.4.3.2.1.3.2.5.2l-7,4.1c-.2,0-.3-.1-.5-.2C431.9,208.7,431.8,208.5,431.6,208.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-6" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M327.2,20.5a4.3342,4.3342,0,0,1,1.8-3.9"/>
                            </clipPath>
                            <clipPath id="clip-path-7" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M405.9,146l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1A1.2308,1.2308,0,0,1,405.9,146Z"/>
                            </clipPath>
                            <clipPath id="clip-path-8" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M333.2,17c-1.7-1-3.2-1.1-4.3-.4"/>
                            </clipPath>
                            <clipPath id="clip-path-9" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M446.3,211.3l7-4.1a1.2683,1.2683,0,0,0,.6-.1l-7,4.1A.6613.6613,0,0,1,446.3,211.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-10" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M322.1,4.7l7-4.1c1.7-1,4-.8,6.6.6l-7,4.1C326.1,3.9,323.8,3.8,322.1,4.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-11" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M457.2,212l7-4.1a9.5857,9.5857,0,0,0,4.3,7.7l-7,4.1A9.7328,9.7328,0,0,1,457.2,212Z"/>
                            </clipPath>
                            <clipPath id="clip-path-12" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M366.5,55.4c-1.1.6-2.6.5-4.3-.4"/>
                            </clipPath>
                            <clipPath id="clip-path-13" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M461.3,225.4l7-4.1a16.4666,16.4666,0,0,0,7.7,13.5c2.2,1.2,4.4,1.5,6.1.6l-7,4.1c-1.7,1-3.9.7-6.1-.6a16.8586,16.8586,0,0,1-7.7-13.5Z"/>
                            </clipPath>
                            <clipPath id="clip-path-14" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M366.5,55.4c1.1-.6,1.8-2,1.8-3.9"/>
                            </clipPath>
                            <clipPath id="clip-path-15" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M380.5,65.5a11.1431,11.1431,0,0,1-5.1-8.8"/>
                            </clipPath>
                            <clipPath id="clip-path-16" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M477.8,228.5l7-4.1a3.3853,3.3853,0,0,0,3.1.1l-7,4.1A3.3853,3.3853,0,0,1,477.8,228.5Z"/>
                            </clipPath>
                            <clipPath id="clip-path-17" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M375.4,47.2a3.6144,3.6144,0,0,1,1.5-3.3"/>
                            </clipPath>
                            <clipPath id="clip-path-18" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M380.5,44.3a3.6,3.6,0,0,0-3.6-.4"/>
                            </clipPath>
                            <clipPath id="clip-path-19" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M491.9,234.4l7-4.1a3.2553,3.2553,0,0,0,1,2.3l-7,4.1A3.2553,3.2553,0,0,1,491.9,234.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-20" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M459.5,176.2l7-4.1A3.514,3.514,0,0,0,465,175l-7,4.1A3.7979,3.7979,0,0,1,459.5,176.2Z"/>
                            </clipPath>
                            <clipPath id="clip-path-21" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M506.4,249l7-4.1a2.1859,2.1859,0,0,0,.5.3l-7,4.1A2.1859,2.1859,0,0,1,506.4,249Z"/>
                            </clipPath>
                            <clipPath id="clip-path-22" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M506.9,249.3l7-4.1c.1.1.3.1.4.2l-7,4.1A.52.52,0,0,1,506.9,249.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-23" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M532.7,263.3l7-4.1c.1.1.3.2.4.3a1.1628,1.1628,0,0,0,1,.2l-7,4.1a1.2316,1.2316,0,0,1-1-.2A1.38,1.38,0,0,0,532.7,263.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-24" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M541.3,259.7l-7,4.1h-.1l7.1-4.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-25" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M493.5,188.5l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1A1.3886,1.3886,0,0,1,493.5,188.5Z"/>
                            </clipPath>
                            <clipPath id="clip-path-26" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M608.7,195.6a3.5739,3.5739,0,0,1-3.6-.4"/>
                            </clipPath>
                            <clipPath id="clip-path-27" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M608.7,195.6a3.7381,3.7381,0,0,0,1.5-3.3"/>
                            </clipPath>
                            <clipPath id="clip-path-28" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M621.9,374l-7,4.1c1.7-1,2.7-3,2.7-5.9l7-4.1C624.5,371,623.5,373.1,621.9,374Z"/>
                            </clipPath>
                            <clipPath id="clip-path-29" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M608.9,167.2l7-4.1c5.1,2.9,9.2,10.1,9.2,15.9l-7,4.1C618.1,177.2,613.9,170.1,608.9,167.2Z"/>
                            </clipPath>
                            <clipPath id="clip-path-30" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M387.2,193.2c.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2,3.5241,3.5241,0,0,1-1.4-2l7-4.1-7,4.1a1.3824,1.3824,0,0,1,.4-1.6l7-4.1a1.3824,1.3824,0,0,0-.4,1.6A3.5241,3.5241,0,0,0,387.2,193.2Z"/>
                            </clipPath>
                            <clipPath id="clip-path-31" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M379.2,193.7l7-4.1a1.2683,1.2683,0,0,1,.6-.1l-7,4.1A.6613.6613,0,0,0,379.2,193.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-32" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M392.7,210.7l7-4.1a.7638.7638,0,0,1,.5.2,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3A.7638.7638,0,0,0,392.7,210.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-33" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M387.6,178.2c.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2,3.5241,3.5241,0,0,1-1.4-2l7-4.1-7,4.1a1.5554,1.5554,0,0,1,.4-1.6l7-4.1a1.3824,1.3824,0,0,0-.4,1.6A3.2284,3.2284,0,0,0,387.6,178.2Z"/>
                            </clipPath>
                            <clipPath id="clip-path-34" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M379.6,178.7l7-4.1a1.2683,1.2683,0,0,1,.6-.1l-7,4.1A1.2683,1.2683,0,0,0,379.6,178.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-35" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M421.5,228l7-4.1a1.2308,1.2308,0,0,1-.5,1l-7,4.1A1.2308,1.2308,0,0,0,421.5,228Z"/>
                            </clipPath>
                            <clipPath id="clip-path-36" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M393.5,180.8l7-4.1a.7638.7638,0,0,1,.5.2,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3A.7638.7638,0,0,0,393.5,180.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-37" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M393.1,195.7l7-4.1a.7638.7638,0,0,1,.5.2,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3S393.3,195.8,393.1,195.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-38" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M414,177.3l-7,4.1-.1-.1,7-4.1A.0979.0979,0,0,0,414,177.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-39" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M414.3,177.6h0c-2.3,1.4-4.7,2.7-7,4.1h0c-.1-.1-.2-.1-.3-.2l7-4.1C414.1,177.4,414.2,177.5,414.3,177.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-40" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M414.3,177.6c.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2C409.6,180.3,412,178.9,414.3,177.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-41" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M406.5,196.3l7-4.1c.1.1.3.2.4.3l-7,4.1C406.8,196.5,406.6,196.4,406.5,196.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-42" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M406.9,196.6l7-4.1c.2.1.3.2.5.2l-7,4.1A1.69,1.69,0,0,1,406.9,196.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-43" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M406.1,211.2l7-4.1c.1.1.3.2.4.3l-7,4.1A.5359.5359,0,0,1,406.1,211.2Z"/>
                            </clipPath>
                            <clipPath id="clip-path-44" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M406.5,211.6l7-4.1c.2.1.3.2.5.2l-7,4.1C406.9,211.7,406.7,211.7,406.5,211.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-45" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M419.8,195.1l7-4.1c.1,0,.3.1.4.1s.1.1.2.1l-7,4.1c-.1,0-.1-.1-.2-.1S419.9,195.1,419.8,195.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-46" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M419.8,195.1l7-4.1a.3674.3674,0,0,1,.3.1l-7,4.1A.3674.3674,0,0,0,419.8,195.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-47" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M420.1,195.2l7-4.1h.1l-7.1,4.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-48" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M427.8,194.9a1.2683,1.2683,0,0,0,.6-.1l-7,4.1a1.2683,1.2683,0,0,1-.6.1C422.9,197.8,425.4,195.3,427.8,194.9Z"/>
                            </clipPath>
                            <clipPath id="clip-path-49" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M420.4,195.3l7-4.1a3.5241,3.5241,0,0,1,1.4,2,1.3824,1.3824,0,0,1-.4,1.6l-7,4.1a1.3824,1.3824,0,0,0,.4-1.6A3.5241,3.5241,0,0,0,420.4,195.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-50" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M379.9,163.8l7-4.1a1.2683,1.2683,0,0,1,.6-.1l-7,4.1A.6613.6613,0,0,0,379.9,163.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-51" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M438.5,244.8l7-4.1a10.4208,10.4208,0,0,0,4.8,8.4l.1.1-7,4.1-.1-.1A10.2794,10.2794,0,0,1,438.5,244.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-52" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M427.4,209.8a1.2683,1.2683,0,0,0,.6-.1l-7,4.1a1.2683,1.2683,0,0,1-.6.1C422.5,212.7,425,210.3,427.4,209.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-53" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M393.8,165.8l7-4.1a1.4213,1.4213,0,0,1,.6.2,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3C394.2,165.9,394,165.9,393.8,165.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-54" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M393.8,165.8l7-4.1h.2l-7,4.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-55" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M419.5,210.1l7-4.1a.7638.7638,0,0,1,.5.2l-7,4.1A.7638.7638,0,0,0,419.5,210.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-56" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M420,210.3l7-4.1a3.5241,3.5241,0,0,1,1.4,2,1.3824,1.3824,0,0,1-.4,1.6l-7,4.1a1.3824,1.3824,0,0,0,.4-1.6A2.98,2.98,0,0,0,420,210.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-57" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M454,249.4l-7,4.1a3.5812,3.5812,0,0,1-3.6-.2l7-4.1A3.8407,3.8407,0,0,0,454,249.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-58" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M436.1,234.7l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1A1.2308,1.2308,0,0,1,436.1,234.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-59" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M434.4,231.4l7-4.1a3.2482,3.2482,0,0,0,1.5,2.6l-7,4.1A3.11,3.11,0,0,1,434.4,231.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-60" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M436.1,234.7l7-4.1a.8963.8963,0,0,1,1.1.1l-7,4.1A.917.917,0,0,0,436.1,234.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-61" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M455.3,245.7l-7,4.1a4.72,4.72,0,0,1-4.7-.3c-.1,0-.1-.1-.2-.1a12.9205,12.9205,0,0,1-4.8-5.3l7-4.1a12.9205,12.9205,0,0,0,4.8,5.3c.1,0,.1.1.2.1A4.7173,4.7173,0,0,0,455.3,245.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-62" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M444.3,229.3a7.4912,7.4912,0,0,0,.4,1.6l-7,4.1a4.707,4.707,0,0,1-.4-1.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-63" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M444.3,229.3l-7,4.1v-.6l7-4.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-64" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M454,249.4l-7,4.1a3.6419,3.6419,0,0,0,1.6-3.2l7-4.1A3.4317,3.4317,0,0,1,454,249.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-65" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M455.3,245.7l-7,4.1c.1-.1.3-.2.4-.3l7-4.1C455.5,245.6,455.4,245.6,455.3,245.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-66" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M451.7,252l7-4.1c-.1,2.5-1,4.3-2.6,5.2l-7,4.1C450.7,256.3,451.6,254.4,451.7,252Z"/>
                            </clipPath>
                            <clipPath id="clip-path-67" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M442.3,235.5l7-4.1a5.3815,5.3815,0,0,0,.4,2.2l-7,4.1A5.3815,5.3815,0,0,1,442.3,235.5Z"/>
                            </clipPath>
                            <clipPath id="clip-path-68" transform="translate(-318.8 0.0194)">
                                <polygon className="cls-1"
                                         points="434.7 220 441.7 215.9 441.7 216 434.7 220.1 434.7 220"/>
                            </clipPath>
                            <clipPath id="clip-path-69" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M448.8,239.1l7-4.1a3.3711,3.3711,0,0,1-.5,1.7l-7,4.1A2.1553,2.1553,0,0,0,448.8,239.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-70" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M450.4,241.9l7-4.1a3.11,3.11,0,0,1,1.5,2.6l-7,4.1A3.3621,3.3621,0,0,0,450.4,241.9Z"/>
                            </clipPath>
                            <clipPath id="clip-path-71" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M459.8,238.6l-7,4.1a1.073,1.073,0,0,1-1.1-.1l7-4.1A1.4167,1.4167,0,0,0,459.8,238.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-72" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M459.8,238.6l-7,4.1a1.2308,1.2308,0,0,0,.5-1l7-4.1A1.3886,1.3886,0,0,1,459.8,238.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-73" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M435.7,197.6l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1A1.2308,1.2308,0,0,1,435.7,197.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-74" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M435.7,197.6l7-4.1a1.073,1.073,0,0,1,1.1.1l-7,4.1A1.073,1.073,0,0,0,435.7,197.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-75" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M438.6,198.6l7-4.1a2.1553,2.1553,0,0,0-.5,1.7l-7,4.1A2.1553,2.1553,0,0,1,438.6,198.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-76" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M443.7,201.4l7-4.1a2.1553,2.1553,0,0,0-.5,1.7l-7,4.1A2.1553,2.1553,0,0,1,443.7,201.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-77" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M449.2,204.4l7-4.1a5.7,5.7,0,0,1,.4,2.2l-7,4.1A4.3064,4.3064,0,0,0,449.2,204.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-78" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M452.6,206.2l7-4.1a3.11,3.11,0,0,1,1.5,2.6l-7,4.1A3.2482,3.2482,0,0,0,452.6,206.2Z"/>
                            </clipPath>
                            <clipPath id="clip-path-79" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M456.4,243.4l7-4.1a3.3318,3.3318,0,0,1-1.5,3l-7,4.1A3.6939,3.6939,0,0,0,456.4,243.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-80" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M422.6,182.5l7-4.1c0,.2.1.4.1.6l-7,4.1A1.2683,1.2683,0,0,1,422.6,182.5Z"/>
                            </clipPath>
                            <clipPath id="clip-path-81" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M420.6,180.3l7-4.1a.7638.7638,0,0,1,.5.2,3.5241,3.5241,0,0,1,1.4,2l-7,4.1a3.5241,3.5241,0,0,0-1.4-2C421,180.4,420.8,180.4,420.6,180.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-82" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M433.6,194l7-4.1a3.252,3.252,0,0,1,3.3.2l-7,4.1A3.252,3.252,0,0,0,433.6,194Z"/>
                            </clipPath>
                            <clipPath id="clip-path-83" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M486.9,261.9a1.7937,1.7937,0,0,0,.5.7l-7,4.1a1.7937,1.7937,0,0,1-.5-.7C482.2,264.6,484.5,263.3,486.9,261.9Z"/>
                            </clipPath>
                            <clipPath id="clip-path-84" transform="translate(-318.8 0.0194)">
                                <polygon className="cls-1"
                                         points="487.8 262.9 487.9 263 480.9 267.1 480.8 267 487.8 262.9"/>
                            </clipPath>
                            <clipPath id="clip-path-85" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M486.5,260.4a2.822,2.822,0,0,0,.4,1.5c-2.3,1.4-4.7,2.7-7,4.1a2.822,2.822,0,0,1-.4-1.5Z"/>
                            </clipPath>
                            <clipPath id="clip-path-86" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M487.9,263a1.2623,1.2623,0,0,0,1.2.1l-7,4.1a1.2868,1.2868,0,0,1-1.2-.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-87" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M482.5,266.2l7-4.1a1.2308,1.2308,0,0,1-.5,1l-7,4.1A1.0155,1.0155,0,0,0,482.5,266.2Z"/>
                            </clipPath>
                            <clipPath id="clip-path-88" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M473.9,232.8a2.9579,2.9579,0,0,0,.9,2.8l-7,4.1a2.8842,2.8842,0,0,1-.9-2.8l7-4.1-7,4.1a.9984.9984,0,0,1,.4-.5l7-4.1A.6644.6644,0,0,0,473.9,232.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-89" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M467.2,236.4l7-4.1a1.2868,1.2868,0,0,1,1.2.1,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3A1.2868,1.2868,0,0,0,467.2,236.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-90" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M480.8,251.8l7-4.1c.1.1.3.2.4.3l-7,4.1C481.1,252,480.9,251.9,480.8,251.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-91" transform="translate(-318.8 0.0194)">
                                <path className="cls-1" d="M452.7,202.7l7-4.1a.0979.0979,0,0,1,.1.1l-7,4.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-92" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M481.3,252.1l7-4.1c.2.1.3.2.5.2l-7,4.1A.7638.7638,0,0,1,481.3,252.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-93" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M492.7,266.7l7-4.1a2.822,2.822,0,0,0,.4,1.5,3.46,3.46,0,0,0,1,1.1,1.2623,1.2623,0,0,0,1.2.1l-7,4.1a1.2868,1.2868,0,0,1-1.2-.1,2.66,2.66,0,0,1-1-1.1A4.1907,4.1907,0,0,1,492.7,266.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-94" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M495.8,268.4l7-4.1a1.2308,1.2308,0,0,1-.5,1l-7,4.1C495.7,269.1,495.9,268.8,495.8,268.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-95" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M507.2,266.1l7-4.1c.1.1.3.2.4.3a1.2623,1.2623,0,0,0,1.2.1l-7,4.1a1.2868,1.2868,0,0,1-1.2-.1C507.5,266.3,507.3,266.2,507.2,266.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-96" transform="translate(-318.8 0.0194)">
                                <polygon className="cls-1" points="515.8 262.4 508.8 266.5 508.8 266.5 515.8 262.4"/>
                            </clipPath>
                            <clipPath id="clip-path-97" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M515.8,262.4l-7,4.1a.9984.9984,0,0,0,.4-.5l7-4.1C516.2,262.2,516,262.3,515.8,262.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-98" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M508.2,263.3l7-4.1a2.8842,2.8842,0,0,1,.9,2.8l-7,4.1A2.6842,2.6842,0,0,0,508.2,263.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-99" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M474.3,217.8a2.9579,2.9579,0,0,0,.9,2.8l-7,4.1a2.8842,2.8842,0,0,1-.9-2.8l7-4.1-7,4.1h0a.9984.9984,0,0,1,.4-.5l7-4.1C474.5,217.5,474.3,217.6,474.3,217.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-100" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M467.6,221.4l7-4.1a1.2868,1.2868,0,0,1,1.2.1l-7,4.1A1.6724,1.6724,0,0,0,467.6,221.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-101" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M481.2,236.8l7-4.1a2.1859,2.1859,0,0,0,.5.3l-7,4.1A.55.55,0,0,1,481.2,236.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-102" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M481.6,237.2l7-4.1c.2.1.3.2.5.2l-7,4.1C482,237.3,481.8,237.3,481.6,237.2Z"/>
                            </clipPath>
                            <clipPath id="clip-path-103" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M494.2,250.6l7-4.1a.7638.7638,0,0,1,.5.2l-7,4.1A.7638.7638,0,0,0,494.2,250.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-104" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M494.7,250.8l7-4.1a1.38,1.38,0,0,1,.4.3l-7,4.1C495.1,251,494.9,250.9,494.7,250.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-105" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M507.6,251.1l7-4.1c.1.1.3.2.4.3a1.2623,1.2623,0,0,0,1.2.1l-7,4.1a1.2868,1.2868,0,0,1-1.2-.1C507.8,251.4,507.7,251.3,507.6,251.1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-106" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M494.6,235.7l7-4.1a.7638.7638,0,0,1,.5.2l-7,4.1A.7638.7638,0,0,0,494.6,235.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-107" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M495.1,235.9l7-4.1a1.38,1.38,0,0,1,.4.3l-7,4.1A1.38,1.38,0,0,0,495.1,235.9Z"/>
                            </clipPath>
                            <clipPath id="clip-path-108" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M508.6,248.3l7-4.1a3.0294,3.0294,0,0,1,1,2.2v.2a.6012.6012,0,0,1-.1.4.9984.9984,0,0,1-.4.5l-7,4.1a.9984.9984,0,0,0,.4-.5.6012.6012,0,0,0,.1-.4v-.2A3.2117,3.2117,0,0,0,508.6,248.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-109" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M496,221.3l7-4.1a3.2117,3.2117,0,0,1,1,2.2l-7,4.1A3.2457,3.2457,0,0,0,496,221.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-110" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M452.8,202.8l7-4.1a9.4341,9.4341,0,0,1,4.4,7.7l-7,4.1A9.4341,9.4341,0,0,0,452.8,202.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-111" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M468.8,221.5l7-4.1a1.38,1.38,0,0,1,.4.3l-7,4.1C469.1,221.8,468.9,221.6,468.8,221.5Z"/>
                            </clipPath>
                            <clipPath id="clip-path-112" transform="translate(-318.8 0.0194)">
                                <polygon className="cls-1"
                                         points="515.4 277.4 508.4 281.5 508.4 281.5 515.4 277.4 515.4 277.4"/>
                            </clipPath>
                            <clipPath id="clip-path-113" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M508.9,280.5l7-4.1a1.2308,1.2308,0,0,1-.5,1l-7,4.1A1.2308,1.2308,0,0,0,508.9,280.5Z"/>
                            </clipPath>
                            <clipPath id="clip-path-114" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M467.6,206.3l7-4.1a1.073,1.073,0,0,1,1.1.1l-7,4.1A.8963.8963,0,0,0,467.6,206.3Z"/>
                            </clipPath>
                            <clipPath id="clip-path-115" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M468.7,206.4l7-4.1a1.7556,1.7556,0,0,1,.5.4l-7,4.1A.9984.9984,0,0,0,468.7,206.4Z"/>
                            </clipPath>
                            <clipPath id="clip-path-116" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M481,218.6l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1A1.3886,1.3886,0,0,1,481,218.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-117" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M481,218.6l7-4.1a1.073,1.073,0,0,1,1.1.1h0l-7,4.1h0A1.3759,1.3759,0,0,0,481,218.6Z"/>
                            </clipPath>
                            <clipPath id="clip-path-118" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M482.2,218.7l7-4.1a3.3621,3.3621,0,0,1,1.5,2.6l-7,4.1A3.5307,3.5307,0,0,0,482.2,218.7Z"/>
                            </clipPath>
                            <clipPath id="clip-path-119" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M501.4,216.7a1.2308,1.2308,0,0,0-.5,1l-7,4.1a1.2308,1.2308,0,0,1,.5-1Z"/>
                            </clipPath>
                            <clipPath id="clip-path-120" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M494.3,220.8l7-4.1a1.2683,1.2683,0,0,1,.6-.1,1.4213,1.4213,0,0,1,.6.2h0a.0979.0979,0,0,1,.1.1h.1a.0979.0979,0,0,1,.1.1l.1.1a.0979.0979,0,0,1,.1.1l-7,4.1-.1-.1-.1-.1a.0979.0979,0,0,1-.1-.1h-.1a.0979.0979,0,0,1-.1-.1h0a1.4213,1.4213,0,0,0-.6-.2A1.2683,1.2683,0,0,0,494.3,220.8Z"/>
                            </clipPath>
                            <clipPath id="clip-path-121" transform="translate(-318.8 0.0194)">
                                <path className="cls-1"
                                      d="M509,233.4l7-4.1a3.2117,3.2117,0,0,1,1,2.2l-7,4.1A3.2117,3.2117,0,0,0,509,233.4Z"/>
                            </clipPath>
                        </defs>
                        <title>tle-isometric</title>
                        <g id="window">
                            <g className="cls-2">
                                <g className="cls-3">
                                    <path className="cls-4"
                                          d="M404.3,191.9l7-4.1a1.2683,1.2683,0,0,0,.1.6l-7,4.1a1.2683,1.2683,0,0,1-.1-.6"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-5">
                                <g className="cls-3">
                                    <path className="cls-4"
                                          d="M404.3,192.5l7-4.1c.1.2.1.5.3.7l-7,4.1a4.8752,4.8752,0,0,0-.3-.7"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6"
                                          d="M404.6,193.2l7-4.1a1.7937,1.7937,0,0,0,.5.7l-7,4.1a3.0388,3.0388,0,0,1-.5-.7"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-7"
                                          d="M405.1,193.9l7-4.1a4.3494,4.3494,0,0,0,.7.6c.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2,2.1688,2.1688,0,0,1-.7-.6"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <polygon className="cls-8"
                                     points="87.5 194.619 94.5 190.619 107.3 192.619 100.3 196.719 87.5 194.619"/>
                            <polygon className="cls-9"
                                     points="100.3 196.719 107.3 192.619 119.9 204.319 112.8 208.419 100.3 196.719"/>
                            <g className="cls-10">
                                <g className="cls-3">
                                    <path className="cls-6"
                                          d="M328.5,32.9l7-4.1a12.0861,12.0861,0,0,0,2,3l-7,4.1a12.0861,12.0861,0,0,1-2-3"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-7"
                                          d="M330.5,36l7-4.1a11.7773,11.7773,0,0,0,2.7,2.3l-7,4.1a14.9256,14.9256,0,0,1-2.7-2.3"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-11">
                                <g className="cls-3">
                                    <path className="cls-4" d="M328.5,32.9a11.3518,11.3518,0,0,1-1.3-5.1"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-4" d="M327.2,27.8" transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-12">
                                <g className="cls-3">
                                    <path className="cls-7"
                                          d="M431.6,208.4l7-4.1c.1.1.3.2.4.3.2.1.3.2.5.2l-7,4.1c-.2,0-.3-.1-.5-.2-.1,0-.2-.2-.4-.3"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <line className="cls-1" x1="8.4" y1="27.8194" x2="8.4" y2="20.5194"/>
                            <g className="cls-13">
                                <g className="cls-3">
                                    <path className="cls-4" d="M327.2,20.5a4.3342,4.3342,0,0,1,1.8-3.9"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-4" d="M328.9,16.6" transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <polygon className="cls-14"
                                     points="86.6 147.019 93.6 142.919 92.5 187.819 85.5 191.919 86.6 147.019"/>
                            <g className="cls-15">
                                <g className="cls-3">
                                    <path className="cls-4"
                                          d="M405.9,146l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1a1.2308,1.2308,0,0,1,.5-1"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-16">
                                <path className="cls-17"
                                      d="M328.9,16.6l7-4.1a3.2868,3.2868,0,0,1,1.7-.4l-7,4.1a3.5333,3.5333,0,0,0-1.7.4"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18" d="M333.2,17a4.9565,4.9565,0,0,0-2.6-.8"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18" d="M330.6,16.2" transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-19">
                                <g className="cls-3">
                                    <path className="cls-7" d="M446.3,211.3l7-4.1h.2l-7,4.1h-.2"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6"
                                          d="M446.5,211.3l7-4.1a.9015.9015,0,0,0,.5-.1l-7,4.1c-.2.1-.4.2-.5.1"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-20">
                                <g className="cls-3">
                                    <path className="cls-6"
                                          d="M322.1,4.7l7-4.1a4.752,4.752,0,0,1,2.6-.6l-7,4.1a5.8344,5.8344,0,0,0-2.6.6"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-7"
                                          d="M324.7,4.1l7-4.1a8.2412,8.2412,0,0,1,4,1.3l-7,4.1a9.9131,9.9131,0,0,0-4-1.3"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <line className="cls-1" x1="43.5" y1="55.0194" x2="14.4" y2="38.2194"/>
                            <polygon className="cls-14"
                                     points="142.7 219.619 149.7 215.619 149.6 221.319 142.5 225.419 142.7 219.619"/>
                            <g className="cls-21">
                                <g className="cls-3">
                                    <path className="cls-4"
                                          d="M457.2,212l7-4.1a7.5612,7.5612,0,0,0,1,3.9l-7,4.1a9.0287,9.0287,0,0,1-1-3.9"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6"
                                          d="M458.2,215.9l7-4.1a16.4433,16.4433,0,0,0,1.4,2.2l-7,4.1a16.4433,16.4433,0,0,1-1.4-2.2"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-7"
                                          d="M459.6,218l7-4.1a7.3505,7.3505,0,0,0,1.9,1.6l-7,4.1a7.0447,7.0447,0,0,1-1.9-1.6"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-22">
                                <g className="cls-3">
                                    <path className="cls-7" d="M364.8,55.8a6.0681,6.0681,0,0,1-2.6-.8"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-7" d="M362.2,55" transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6" d="M366.5,55.4a3.2868,3.2868,0,0,1-1.7.4"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6" d="M364.8,55.8" transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-23">
                                <g className="cls-3">
                                    <path className="cls-4"
                                          d="M461.3,225.4l7-4.1a14.58,14.58,0,0,0,1.7,6.8l-7,4.1a14.58,14.58,0,0,1-1.7-6.8"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6"
                                          d="M463,232.2l7-4.1c.2.3.3.7.5,1a17.9091,17.9091,0,0,0,2,2.8l-7,4.1a28.3175,28.3175,0,0,1-2-2.8,9.25,9.25,0,0,0-.5-1"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-7"
                                          d="M465.5,236l7-4.1a12.053,12.053,0,0,0,3.5,2.9,6.6255,6.6255,0,0,0,3.6,1.1l-7,4.1a8.9019,8.9019,0,0,1-3.6-1.1,16.3817,16.3817,0,0,1-3.5-2.9"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6"
                                          d="M472.6,240l7-4.1a4.7508,4.7508,0,0,0,2.4-.6l-7,4.1a3.3526,3.3526,0,0,1-2.4.6"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-24">
                                <path className="cls-25" d="M366.5,55.4c1.1-.6,1.8-2,1.8-3.9"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25" d="M368.3,51.6" transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-14"
                                     points="138.7 202.319 145.7 198.219 145.5 207.919 138.4 212.019 138.7 202.319"/>
                            <polygon className="cls-9"
                                     points="129 197.019 136 192.919 145.7 198.219 138.7 202.319 129 197.019"/>
                            <g className="cls-26">
                                <g className="cls-3">
                                    <path className="cls-4" d="M376.5,61.1a9.16,9.16,0,0,1-1.1-4.3"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-4" d="M375.4,56.7" transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6"
                                          d="M376.5,61.1l7-4.1a11.0155,11.0155,0,0,0,1.7,2.5l-7,4.1a13.7883,13.7883,0,0,1-1.7-2.5"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-7"
                                          d="M378.2,63.6l7-4.1a7.9389,7.9389,0,0,0,2.2,1.9l-7,4.1a7.9389,7.9389,0,0,1-2.2-1.9"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <line className="cls-1" x1="43.5" y1="33.8194" x2="14.4" y2="17.0194"/>
                            <path className="cls-18" d="M365,36.1a11.7773,11.7773,0,0,0-2.7-2.3"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-18" d="M362.3,33.8" transform="translate(-318.8 0.0194)"/>
                            <path className="cls-17" d="M367,39.1a12.0861,12.0861,0,0,0-2-3"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-17" d="M365,36.1" transform="translate(-318.8 0.0194)"/>
                            <path className="cls-25" d="M367,39.1" transform="translate(-318.8 0.0194)"/>
                            <line className="cls-1" x1="56.6" y1="56.7194" x2="56.6" y2="47.2194"/>
                            <g className="cls-27">
                                <g className="cls-3">
                                    <path className="cls-7"
                                          d="M477.8,228.5l7-4.1a3.2868,3.2868,0,0,0,1.7.4l-7,4.1a4.711,4.711,0,0,1-1.7-.4"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6"
                                          d="M479.4,228.9l7-4.1a3.194,3.194,0,0,0,1.4-.3l-7,4.1a2.2324,2.2324,0,0,1-1.4.3"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-28">
                                <g className="cls-3">
                                    <path className="cls-4" d="M375.4,47.2a3.6144,3.6144,0,0,1,1.5-3.3"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-4" d="M376.9,44" transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <polygon className="cls-14"
                                     points="139.3 179.119 146.3 175.119 146.2 179.719 139.1 183.819 139.3 179.119"/>
                            <g className="cls-29">
                                <path className="cls-17" d="M378.3,43.6a3.194,3.194,0,0,0-1.4.3"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17" d="M376.9,44" transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18" d="M380.5,44.3a5.6781,5.6781,0,0,0-2.2-.7"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-30">
                                <g className="cls-3">
                                    <path className="cls-4"
                                          d="M491.9,234.4l7-4.1a2.7681,2.7681,0,0,0,.3,1.3l-7,4.1a3.0793,3.0793,0,0,1-.3-1.3"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6"
                                          d="M492.2,235.7l7-4.1a1.7937,1.7937,0,0,0,.5.7l-7,4.1a4.2335,4.2335,0,0,1-.5-.7"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-7" d="M492.7,236.4l7-4.1.2.2-7,4.1-.2-.2"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-31">
                                <g className="cls-3">
                                    <path className="cls-4"
                                          d="M459.5,176.2l7-4.1A3.514,3.514,0,0,0,465,175l-7,4.1a3.7979,3.7979,0,0,1,1.5-2.9"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <polygon className="cls-9"
                                     points="174.2 236.719 181.2 232.619 194.6 244.919 187.6 249.019 174.2 236.719"/>
                            <g className="cls-32">
                                <g className="cls-3">
                                    <path className="cls-7"
                                          d="M506.4,249l7-4.1a2.1859,2.1859,0,0,0,.5.3l-7,4.1a2.1859,2.1859,0,0,1-.5-.3"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-33">
                                <g className="cls-3">
                                    <path className="cls-7"
                                          d="M506.9,249.3l7-4.1c.1.1.3.1.4.2l-7,4.1a.52.52,0,0,1-.4-.2"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <polygon className="cls-9"
                                     points="163.7 215.919 170.8 211.819 180.5 217.119 173.5 221.219 163.7 215.919"/>
                            <polygon className="cls-14"
                                     points="173.5 221.219 180.5 217.119 180.2 230.319 173.1 234.419 173.5 221.219"/>
                            <polygon className="cls-8"
                                     points="188.5 249.519 195.5 245.419 208.4 247.519 201.4 251.619 188.5 249.519"/>
                            <polygon className="cls-9"
                                     points="201.4 251.619 208.4 247.519 221 259.219 213.9 263.319 201.4 251.619"/>
                            <g className="cls-34">
                                <g className="cls-3">
                                    <path className="cls-7"
                                          d="M532.7,263.3l7-4.1c.1.1.3.2.4.3a1.8539,1.8539,0,0,0,.7.2l-7,4.1a1.8539,1.8539,0,0,1-.7-.2,1.38,1.38,0,0,0-.4-.3"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6" d="M533.9,263.8l7-4.1h.3l-7,4.1h-.3"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-35">
                                <g className="cls-3">
                                    <path className="cls-6" d="M534.1,263.8l7-4.1h.1l-7.1,4.1h0"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <polygon className="cls-14"
                                     points="174.3 189.519 181.3 185.419 181 198.619 173.9 202.719 174.3 189.519"/>
                            <g className="cls-36">
                                <g className="cls-3">
                                    <path className="cls-4"
                                          d="M493.5,188.5l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1a1.3886,1.3886,0,0,1,.5-1"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <line className="cls-1" x1="286.3" y1="195.2194" x2="61.7" y2="65.5194"/>
                            <g className="cls-37">
                                <g className="cls-3">
                                    <path className="cls-7" d="M607.3,195.9a4.3945,4.3945,0,0,1-2.2-.7"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-7" d="M605.1,195.2" transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6" d="M608.7,195.6a2.2324,2.2324,0,0,1-1.4.3"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6" d="M607.3,195.9" transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <g className="cls-38">
                                <path className="cls-25" d="M608.7,195.6a3.7381,3.7381,0,0,0,1.5-3.3"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25" d="M610.2,192.3" transform="translate(-318.8 0.0194)"/>
                            </g>
                            <line className="cls-1" x1="291.4" y1="192.3194" x2="291.4" y2="182.8194"/>
                            <path className="cls-18" d="M607.4,175.9a7.9389,7.9389,0,0,0-2.2-1.9"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-18" d="M605.2,174" transform="translate(-318.8 0.0194)"/>
                            <path className="cls-17" d="M609.1,178.5a11.0155,11.0155,0,0,0-1.7-2.5"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-17" d="M607.4,175.9" transform="translate(-318.8 0.0194)"/>
                            <path className="cls-25" d="M610.2,182.8a9.16,9.16,0,0,0-1.1-4.3"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-25" d="M609.1,178.5" transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M605.2,174a11.1431,11.1431,0,0,1,5.1,8.8v9.5c0,3.2-2.3,4.5-5.1,2.9L380.5,65.5a11.1431,11.1431,0,0,1-5.1-8.8V47.2c0-3.2,2.3-4.5,5.1-2.9Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-40"
                                  d="M608.9,167.2c5.1,2.9,9.2,10.1,9.2,15.9l-.5,189.1c0,5.9-4.2,8.2-9.2,5.3L328,215.7c-5.1-2.9-9.2-10.1-9.2-15.9l.5-189.1c0-5.9,4.2-8.2,9.2-5.3Zm-74.1,95.5,1.1-44.9a2.8657,2.8657,0,0,0-1-2.2l-13.1-12.1c-.1-.1-.3-.2-.4-.3-.2-.1-.3-.1-.5-.2L508,200.9,495.1,189c-.1-.1-.3-.2-.4-.3-.9-.5-1.6-.1-1.7.9l-.3,13.2-9.7-5.3.1-4.7a9.4341,9.4341,0,0,0-4.4-7.7l-15.9-8.6c-2.5-1.3-4.7-.1-4.8,2.8l-.1,4.7-9.7-5.3.3-13.2a1.2683,1.2683,0,0,0-.1-.6,3.5241,3.5241,0,0,0-1.4-2c-.2-.1-.3-.2-.5-.2l-13.2-2.3-12.6-11.7c-.1-.1-.3-.2-.4-.3-.2-.1-.3-.2-.5-.2L406.4,146c-.6-.1-1.1.3-1.1,1.1L404.2,192a1.2683,1.2683,0,0,0,.1.6,3.5241,3.5241,0,0,0,1.4,2c.2.1.3.2.5.2l12.8,2.1,12.6,11.7c.1.1.3.2.4.3.2.1.3.2.5.2l13.7,2.4a1.2683,1.2683,0,0,0,.6-.1,1.2308,1.2308,0,0,0,.5-1l.3-13.2,9.7,5.3-.2,9.7a9.5857,9.5857,0,0,0,4.3,7.7l-.2,5.7a16.4666,16.4666,0,0,0,7.7,13.5c2.2,1.2,4.4,1.5,6.1.6,1.6-.9,2.5-2.8,2.6-5.2l.1-5.7a3.3853,3.3853,0,0,0,3.1.1,3.5637,3.5637,0,0,0,1.5-3l.2-9.7,9.7,5.3-.3,13.2a3.2553,3.2553,0,0,0,1,2.3l13.4,12.3a2.1859,2.1859,0,0,0,.5.3c.1.1.3.1.4.2l12.9,2.1,12.6,11.7c.1.1.3.2.4.3a1.1628,1.1628,0,0,0,1,.2,1.8909,1.8909,0,0,0,.7-1.4m75.4-70.4v-9.5a11.2977,11.2977,0,0,0-5.1-8.8L380.5,44.3c-2.8-1.6-5.1-.3-5.1,2.9v9.5a11.2977,11.2977,0,0,0,5.1,8.8L605.2,195.2c2.7,1.6,5,.3,5-2.9M368.3,51.6V44.3a13.3334,13.3334,0,0,0-6-10.4L333.2,17c-3.3-1.9-6-.4-6,3.4v7.3a13.3334,13.3334,0,0,0,6,10.4l29,16.9c3.4,1.9,6.1.4,6.1-3.4"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M362.3,33.8a13.0689,13.0689,0,0,1,6,10.4v7.3c0,3.8-2.7,5.4-6,3.5L333.2,38.2a13.0689,13.0689,0,0,1-6-10.4V20.5c0-3.8,2.7-5.4,6-3.4Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-41">
                                <g className="cls-3">
                                    <path className="cls-4"
                                          d="M617.5,372.2l7-4.1c0,2.9-1,5-2.7,5.9l-7,4.1c1.7-.9,2.7-3,2.7-5.9"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <polygon className="cls-42"
                                     points="299.2 183.119 306.3 179.019 305.8 368.119 298.7 372.219 299.2 183.119"/>
                            <polygon className="cls-9"
                                     points="9.8 5.419 16.9 1.319 297.1 163.119 290.1 167.219 9.8 5.419"/>
                            <g className="cls-43">
                                <g className="cls-3">
                                    <path className="cls-7"
                                          d="M608.9,167.2l7-4.1a16.9494,16.9494,0,0,1,4.1,3.5l-7,4.1a16.9494,16.9494,0,0,0-4.1-3.5"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-6"
                                          d="M612.9,170.6l7-4.1a24.7048,24.7048,0,0,1,3.1,4.6l-7,4.1a23.21,23.21,0,0,0-3.1-4.6"
                                          transform="translate(-318.8 0.0194)"/>
                                    <path className="cls-4"
                                          d="M616,175.2l7-4.1a16.55,16.55,0,0,1,2,7.9l-7,4.1a17.15,17.15,0,0,0-2-7.9"
                                          transform="translate(-318.8 0.0194)"/>
                                </g>
                            </g>
                            <polygon className="cls-8"
                                     points="128.8 206.219 120.8 204.819 113.8 208.919 127.5 211.319 128.8 210.619 128.8 206.219"/>
                        </g>
                        <g id="satellite">
                            <g className="cls-44">
                                <path className="cls-25"
                                      d="M379.2,193.7l7-4.1a1.3824,1.3824,0,0,0-.4,1.6c.1.2.1.5.3.7l-7,4.1c-.1-.2-.2-.5-.3-.7a1.2541,1.2541,0,0,1,.4-1.6"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M379,196l7-4.1a1.7937,1.7937,0,0,0,.5.7l-7,4.1c-.2-.2-.3-.5-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M379.5,196.7l7-4.1a4.3494,4.3494,0,0,0,.7.6c.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2,4.3494,4.3494,0,0,1-.7-.6"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-45"
                                     points="61.9 197.519 68.9 193.419 70 193.519 63 197.619 61.9 197.519"/>
                            <polygon className="cls-46"
                                     points="63 197.619 70 193.519 69.7 204.819 62.7 208.919 63 197.619"/>
                            <g className="cls-47">
                                <path className="cls-17"
                                      d="M379.2,193.7l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1a.7494.7494,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18" d="M379.7,193.6l7-4.1h.2l-7,4.1h-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-45"
                                     points="61 193.619 68.1 189.519 70.1 189.819 63.1 193.919 61 193.619"/>
                            <polygon className="cls-45"
                                     points="62.7 208.919 69.7 204.819 79.9 206.419 72.9 210.519 62.7 208.919"/>
                            <polygon className="cls-45"
                                     points="72.9 210.519 79.9 206.419 81 206.619 73.9 210.719 72.9 210.519"/>
                            <g className="cls-48">
                                <path className="cls-18"
                                      d="M392.7,210.7l7-4.1a.7638.7638,0,0,1,.5.2,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3a.7638.7638,0,0,0-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="74.9 211.219 82 207.119 83 208.119 76 212.219 74.9 211.219"/>
                            <g className="cls-50">
                                <path className="cls-25"
                                      d="M379.6,178.7l7-4.1a1.3824,1.3824,0,0,0-.4,1.6c.1.2.1.5.3.7l-7,4.1c-.1-.2-.2-.5-.3-.7a1.2541,1.2541,0,0,1,.4-1.6"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M379.4,181l7-4.1a1.7937,1.7937,0,0,0,.5.7l-7,4.1a1.7937,1.7937,0,0,1-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M379.9,181.7l7-4.1a4.3494,4.3494,0,0,0,.7.6c.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2,1.3444,1.3444,0,0,1-.7-.6"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-45"
                                     points="62.3 182.519 69.3 178.419 70.4 178.619 63.4 182.719 62.3 182.519"/>
                            <polygon className="cls-46"
                                     points="63.4 182.719 70.4 178.619 70.1 189.819 63.1 193.919 63.4 182.719"/>
                            <polygon className="cls-49"
                                     points="76 212.219 83 208.119 93 217.419 86 221.519 76 212.219"/>
                            <polygon className="cls-51"
                                     points="62.7 208.919 63 197.619 73.1 199.319 72.9 210.519 62.7 208.919"/>
                            <polygon className="cls-52"
                                     points="63 197.619 70 193.519 80.2 195.219 73.1 199.319 63 197.619"/>
                            <polygon className="cls-53"
                                     points="73.1 199.319 80.2 195.219 79.9 206.419 72.9 210.519 73.1 199.319"/>
                            <g className="cls-54">
                                <path className="cls-17"
                                      d="M379.6,178.7l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1a.7494.7494,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18" d="M380,178.6l7-4.1h.1l-7,4.1H380"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="86 221.519 93 217.419 94.5 218.819 87.5 222.919 86 221.519"/>
                            <polygon className="cls-45"
                                     points="73.1 199.319 80.2 195.219 81.8 195.419 74.7 199.519 73.1 199.319"/>
                            <polygon className="cls-45"
                                     points="87.5 222.919 94.5 218.819 96.1 219.119 89.1 223.219 87.5 222.919"/>
                            <polygon className="cls-45"
                                     points="61.4 178.619 68.4 174.519 70.5 174.919 63.4 179.019 61.4 178.619"/>
                            <polygon className="cls-49"
                                     points="74.7 199.519 81.8 195.419 83.3 196.919 76.3 201.019 74.7 199.519"/>
                            <polygon className="cls-46"
                                     points="76.3 201.019 83.3 196.919 83 208.119 76 212.219 76.3 201.019"/>
                            <polygon className="cls-46"
                                     points="63.7 167.719 70.8 163.619 70.5 174.919 63.4 179.019 63.7 167.719"/>
                            <polygon className="cls-45"
                                     points="89.1 223.219 96.1 219.119 106.6 220.919 99.6 225.019 89.1 223.219"/>
                            <g className="cls-55">
                                <path className="cls-25"
                                      d="M421.5,228l7-4.1a1.2308,1.2308,0,0,1-.5,1l-7,4.1a1.2308,1.2308,0,0,0,.5-1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-52"
                                     points="63.7 167.719 70.8 163.619 81 165.319 73.9 169.419 63.7 167.719"/>
                            <polygon className="cls-52"
                                     points="63.4 182.719 70.4 178.619 80.6 180.219 73.5 184.319 63.4 182.719"/>
                            <polygon className="cls-45"
                                     points="63.4 179.019 70.5 174.919 80.7 176.519 73.6 180.619 63.4 179.019"/>
                            <polygon className="cls-53"
                                     points="73.9 169.419 81 165.319 80.7 176.519 73.6 180.619 73.9 169.419"/>
                            <polygon className="cls-53"
                                     points="99.9 213.719 106.9 209.619 106.6 220.919 99.6 225.019 99.9 213.719"/>
                            <polygon className="cls-45"
                                     points="73.9 169.419 81 165.319 82.5 165.519 75.5 169.619 73.9 169.419"/>
                            <polygon className="cls-49"
                                     points="75.5 169.619 82.5 165.519 84.1 167.019 77 171.119 75.5 169.619"/>
                            <polygon className="cls-45"
                                     points="73.6 180.619 80.7 176.519 81.7 176.719 74.7 180.819 73.6 180.619"/>
                            <g className="cls-56">
                                <path className="cls-18"
                                      d="M393.5,180.8l7-4.1a.7638.7638,0,0,1,.5.2,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3a.7638.7638,0,0,0-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="75.7 181.319 82.7 177.219 83.8 178.219 76.7 182.319 75.7 181.319"/>
                            <polygon className="cls-46"
                                     points="77 171.119 84.1 167.019 83.8 178.219 76.7 182.319 77 171.119"/>
                            <polygon className="cls-45"
                                     points="63.1 193.919 70.1 189.819 80.3 191.519 73.2 195.619 63.1 193.919"/>
                            <polygon className="cls-45"
                                     points="73.2 195.619 80.3 191.519 81.4 191.619 74.3 195.719 73.2 195.619"/>
                            <g className="cls-57">
                                <path className="cls-18"
                                      d="M393.1,195.7l7-4.1a.7638.7638,0,0,1,.5.2,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3s-.3-.1-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="75.3 196.319 82.3 192.219 83.4 193.219 76.3 197.319 75.3 196.319"/>
                            <polygon className="cls-53"
                                     points="73.5 184.319 80.6 180.219 80.3 191.519 73.2 195.619 73.5 184.319"/>
                            <polygon className="cls-46"
                                     points="76.6 186.019 83.7 181.919 83.4 193.219 76.3 197.319 76.6 186.019"/>
                            <polygon className="cls-58"
                                     points="76.6 186.019 83.7 181.919 93.7 191.219 86.6 195.319 76.6 186.019"/>
                            <polygon className="cls-45"
                                     points="73.5 184.319 80.6 180.219 82.1 180.519 75.1 184.619 73.5 184.319"/>
                            <polygon className="cls-49"
                                     points="75.1 184.619 82.1 180.519 83.7 181.919 76.6 186.019 75.1 184.619"/>
                            <polygon className="cls-49"
                                     points="76.7 182.319 83.8 178.219 93.8 187.519 86.7 191.619 76.7 182.319"/>
                            <polygon className="cls-59"
                                     points="87 180.319 94 176.219 93.8 187.519 86.7 191.619 87 180.319"/>
                            <polygon className="cls-58"
                                     points="77 171.119 84.1 167.019 94 176.219 87 180.319 77 171.119"/>
                            <polygon className="cls-49"
                                     points="87 180.319 94 176.219 95.1 177.219 88 181.319 87 180.319"/>
                            <g className="cls-60">
                                <path className="cls-18"
                                      d="M406.8,181.3l7-4.1c.1.1.3.2.4.3.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2c-.1,0-.2-.2-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-61">
                                <path className="cls-18"
                                      d="M406.8,181.3l7-4.1c.1.1.3.2.4.3.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2c-.1,0-.2-.2-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-62">
                                <path className="cls-18"
                                      d="M406.8,181.3l7-4.1c.1.1.3.2.4.3.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2c-.1,0-.2-.2-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-58"
                                     points="76.3 201.019 83.3 196.919 93.3 206.219 86.2 210.319 76.3 201.019"/>
                            <polygon className="cls-49"
                                     points="76.3 197.319 83.4 193.219 93.4 202.419 86.3 206.519 76.3 197.319"/>
                            <polygon className="cls-49"
                                     points="86.7 191.619 93.8 187.519 95.3 188.919 88.2 193.019 86.7 191.619"/>
                            <polygon className="cls-45"
                                     points="88.2 193.019 95.3 188.919 96.9 189.219 89.8 193.319 88.2 193.019"/>
                            <polygon className="cls-46"
                                     points="90.1 182.019 97.2 177.919 96.9 189.219 89.8 193.319 90.1 182.019"/>
                            <polygon className="cls-45"
                                     points="89 181.919 96.1 177.819 97.2 177.919 90.1 182.019 89 181.919"/>
                            <polygon className="cls-59"
                                     points="86.6 195.319 93.7 191.219 93.4 202.419 86.3 206.519 86.6 195.319"/>
                            <polygon className="cls-49"
                                     points="86.3 206.519 93.4 202.419 94.9 203.919 87.9 208.019 86.3 206.519"/>
                            <polygon className="cls-45"
                                     points="87.9 208.019 94.9 203.919 96.5 204.119 89.4 208.219 87.9 208.019"/>
                            <polygon className="cls-46"
                                     points="89.7 197.019 96.8 192.919 96.5 204.119 89.4 208.219 89.7 197.019"/>
                            <polygon className="cls-52"
                                     points="89.7 197.019 96.8 192.919 106.9 194.519 99.9 198.619 89.7 197.019"/>
                            <polygon className="cls-49"
                                     points="86.6 195.319 93.7 191.219 94.7 192.219 87.7 196.319 86.6 195.319"/>
                            <g className="cls-63">
                                <path className="cls-18" d="M406.5,196.3l7-4.1c.1.1.3.2.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-64">
                                <path className="cls-18"
                                      d="M406.9,196.6l7-4.1c.2.1.3.2.5.2l-7,4.1a1.69,1.69,0,0,1-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-45"
                                     points="88.7 196.819 95.7 192.719 96.8 192.919 89.7 197.019 88.7 196.819"/>
                            <polygon className="cls-45"
                                     points="89.8 193.319 96.9 189.219 107.4 190.919 100.4 195.019 89.8 193.319"/>
                            <polygon className="cls-59"
                                     points="86.2 210.319 93.3 206.219 93 217.419 86 221.519 86.2 210.319"/>
                            <polygon className="cls-49"
                                     points="86.2 210.319 93.3 206.219 94.3 207.119 87.3 211.219 86.2 210.319"/>
                            <g className="cls-65">
                                <path className="cls-18"
                                      d="M406.1,211.2l7-4.1c.1.1.3.2.4.3l-7,4.1a.5359.5359,0,0,1-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-66">
                                <path className="cls-18" d="M406.5,211.6l7-4.1c.2.1.3.2.5.2l-7,4.1c-.1-.1-.3-.1-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-46"
                                     points="89.3 211.919 96.4 207.819 96.1 219.119 89.1 223.219 89.3 211.919"/>
                            <polygon className="cls-45"
                                     points="88.3 211.819 95.3 207.719 96.4 207.819 89.3 211.919 88.3 211.819"/>
                            <polygon className="cls-52"
                                     points="89.3 211.919 96.4 207.819 106.9 209.619 99.9 213.719 89.3 211.919"/>
                            <polygon className="cls-45"
                                     points="99.9 213.719 106.9 209.619 108.4 209.819 101.3 213.919 99.9 213.719"/>
                            <polygon className="cls-49"
                                     points="101.3 213.919 108.4 209.819 110.1 210.719 103 214.819 101.3 213.919"/>
                            <polygon className="cls-45"
                                     points="101.3 213.919 108.4 209.819 108.6 209.819 101.6 213.919 101.3 213.919"/>
                            <path className="cls-39"
                                  d="M420,210.3a3.5241,3.5241,0,0,1,1.4,2,1.3824,1.3824,0,0,1-.4,1.6,1.2683,1.2683,0,0,1-.6.1h-.2l-1.4-.2-10.5-1.7-1.1-.2a.7638.7638,0,0,1-.5-.2,1.38,1.38,0,0,1-.4-.3l-1.1-1-10-9.3-1.5-1.4-1.6-.3-10.2-1.7-1.1-.2a.7636.7636,0,0,1-.5-.2,3.5232,3.5232,0,0,1-1.4-2c-.2-1.1.2-1.8,1-1.7l2.1.3,10.2,1.7,1.1.2a.7638.7638,0,0,1,.5.2,1.38,1.38,0,0,1,.4.3l1.1,1,10,9.3,1.5,1.4,1.6.3,10.2,1.7,1.1.2C419.7,210.1,419.9,210.2,420,210.3Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-45"
                                     points="100.4 195.019 107.4 190.919 108 191.019 101 195.119 100.4 195.019"/>
                            <polygon className="cls-45"
                                     points="89.4 208.219 96.5 204.119 106.7 205.819 99.6 209.919 89.4 208.219"/>
                            <polygon className="cls-53"
                                     points="99.9 198.619 106.9 194.519 106.7 205.819 99.6 209.919 99.9 198.619"/>
                            <polygon className="cls-45"
                                     points="99.9 198.619 106.9 194.519 109 194.919 102 199.019 99.9 198.619"/>
                            <g className="cls-67">
                                <path className="cls-18"
                                      d="M419.8,195.1l7-4.1c.1,0,.3.1.4.1s.1.1.2.1l-7,4.1c-.1,0-.1-.1-.2-.1s-.3-.1-.4-.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-68">
                                <path className="cls-18"
                                      d="M419.8,195.1l7-4.1a.3674.3674,0,0,1,.3.1l-7,4.1a.3674.3674,0,0,0-.3-.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-39"
                                  d="M419.9,195.1h0a.774.774,0,0,1,.3.1C420,195.1,420,195.1,419.9,195.1Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-69">
                                <path className="cls-18" d="M420.1,195.2l7-4.1h.1l-7.1,4.1h0"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-70">
                                <path className="cls-18" d="M420.8,199l7-4.1h.2l-7,4.1h-.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M420.9,199l7-4.1a.9015.9015,0,0,0,.5-.1l-7,4.1a.9015.9015,0,0,1-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-71">
                                <path className="cls-18"
                                      d="M420.4,195.3l7-4.1a1.874,1.874,0,0,1,.7.6l-7,4.1a2.0357,2.0357,0,0,0-.7-.6"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M421.1,195.9l7-4.1c.2.2.3.5.5.7l-7,4.1a4.2335,4.2335,0,0,0-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M421.5,196.6l7-4.1c.1.2.2.5.3.7a1.3824,1.3824,0,0,1-.4,1.6l-7,4.1a1.3824,1.3824,0,0,0,.4-1.6c-.1-.3-.1-.5-.3-.7"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="101.6 195.319 108.7 191.219 110.5 192.219 103.5 196.319 101.6 195.319"/>
                            <polygon className="cls-72"
                                     points="90.1 182.019 97.2 177.919 107.7 179.819 100.6 183.919 90.1 182.019"/>
                            <polygon className="cls-53"
                                     points="100.6 183.919 107.7 179.819 107.4 190.919 100.4 195.019 100.6 183.919"/>
                            <path className="cls-39"
                                  d="M422.6,183.1a1.2683,1.2683,0,0,0-.1-.6,3.5241,3.5241,0,0,0-1.4-2c-.2-.1-.3-.2-.5-.2L407.4,178l-12.6-11.7c-.1-.1-.3-.2-.4-.3a1.4213,1.4213,0,0,0-.6-.2l-13.2-2.2c-.6-.1-1.1.3-1.1,1.1l-1.1,44.9a1.2683,1.2683,0,0,0,.1.6,3.5241,3.5241,0,0,0,1.4,2c.2.1.3.2.5.2l12.8,2.1,12.6,11.7c.1.1.3.2.4.3.2.1.3.2.5.2l13.7,2.4a1.2683,1.2683,0,0,0,.6-.1,1.2308,1.2308,0,0,0,.5-1l.3-13.2-1.7-.9h0l-1.4-.2-.3,11.4-10.5-1.8-1.6-.3-1.5-1.4-10-9.3-1.1-1c-.1-.1-.3-.2-.4-.3-.2-.1-.3-.2-.5-.2l-1.1-.2-10.2-1.7.3-11.2-1.1-.2a.7638.7638,0,0,1-.5-.2c-.2-.1-.3-.2-.5-.3a2.5771,2.5771,0,0,1-.8-1.3v-.1c0-.1-.1-.2-.1-.3v-.1h0v-.4h0c0-.8.4-1.2,1.1-1.1l2.1.3.3-11.2-1.1-.2a.7638.7638,0,0,1-.5-.2,3.5241,3.5241,0,0,1-1.4-2c-.2-1.1.2-1.8,1-1.7l2.1.3.3-11.2,10.2,1.7,1.6.3,1.5,1.4,10,9.3,1,1c.1.1.3.2.4.3.2.1.3.2.5.2l1.1.2,10.5,1.8-.3,11.1.6.1c.1,0,.3.1.4.1s.1.1.2.1l1.9,1Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M391.9,199.3l1.6.3L395,201l-.3,11.2-1.1-1c-.1-.1-.3-.2-.4-.3-.2-.1-.3-.2-.5-.2l-1.1-.2Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-73"
                                     points="76 212.219 76.3 201.019 86.2 210.319 86 221.519 76 212.219"/>
                            <path className="cls-39"
                                  d="M406.5,211.6c.2.1.3.2.5.2l1.1.2-.3,11.3-1.6-.3-1.5-1.4.3-11.2,1.1,1A.7581.7581,0,0,1,406.5,211.6Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-51"
                                     points="63.1 193.919 63.4 182.719 73.5 184.319 73.2 195.619 63.1 193.919"/>
                            <g className="cls-74">
                                <path className="cls-17"
                                      d="M379.9,163.8l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1c-.2-.1-.3,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18" d="M380.4,163.6l7-4.1h.2l-7,4.1c-.1.1-.1,0-.2,0"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-39"
                                  d="M392.3,184.3l1.6.3,1.5,1.4-.3,11.2-1.1-1c-.1-.1-.3-.2-.4-.3-.2-.1-.3-.2-.5-.2l-1.1-.2Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M420.4,195.3a3.5241,3.5241,0,0,1,1.4,2,1.3824,1.3824,0,0,1-.4,1.6,1.2683,1.2683,0,0,1-.6.1l-2.1-.3L408.5,197l-1.1-.2a.7638.7638,0,0,1-.5-.2,1.38,1.38,0,0,1-.4-.3l-1.1-1-10-9.3-1.5-1.4-1.6-.3-10.2-1.7-1.1-.2a.7638.7638,0,0,1-.5-.2,3.5241,3.5241,0,0,1-1.4-2c-.2-1.1.2-1.8,1-1.7l2.1.3,10.2,1.7,1.1.2a.7638.7638,0,0,1,.5.2,1.38,1.38,0,0,1,.4.3l1.1,1,10,9.3,1.5,1.4,1.6.3,10.5,1.7.6.1c.1,0,.3.1.4.1C420.3,195.2,420.3,195.3,420.4,195.3Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-73"
                                     points="76.3 197.319 76.6 186.019 86.6 195.319 86.3 206.519 76.3 197.319"/>
                            <path className="cls-39"
                                  d="M406.9,196.6c.2.1.3.2.5.2l1.1.2-.3,11.2-1.6-.3-1.5-1.4.3-11.2,1.1,1C406.6,196.4,406.8,196.5,406.9,196.6Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-51"
                                     points="63.7 167.719 73.9 169.419 73.6 180.619 63.4 179.019 63.7 167.719"/>
                            <polygon className="cls-51"
                                     points="89.1 223.219 89.3 211.919 99.9 213.719 99.6 225.019 89.1 223.219"/>
                            <g className="cls-75">
                                <path className="cls-25"
                                      d="M438.5,244.8l7-4.1a9.98,9.98,0,0,0,1,4.2l-7,4.1a9.98,9.98,0,0,1-1-4.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M439.5,249l7-4.1a8.6771,8.6771,0,0,0,1.6,2.3l-7,4.1a10.3471,10.3471,0,0,1-1.6-2.3"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M441.1,251.4l7-4.1a7.8708,7.8708,0,0,0,2.2,1.8l.1.1-7,4.1-.1-.1a7.8708,7.8708,0,0,1-2.2-1.8"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-39"
                                  d="M394.3,169.6l1.5,1.4-.3,11.2-1.1-1c-.1-.1-.3-.2-.4-.3a1.4213,1.4213,0,0,0-.6-.2l-1.1-.2.3-11.2Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-46"
                                     points="119.7 244.119 126.8 240.019 126.7 240.719 119.7 244.819 119.7 244.119"/>
                            <g className="cls-76">
                                <path className="cls-18" d="M420.4,213.9l7-4.1h.2l-7,4.1a.1385.1385,0,0,1-.2,0"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M420.5,214l7-4.1a.9015.9015,0,0,0,.5-.1l-7,4.1a4.3311,4.3311,0,0,1-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-46"
                                     points="103 214.819 110.1 210.719 109.7 223.919 102.7 228.019 103 214.819"/>
                            <polygon className="cls-45"
                                     points="99.6 209.919 106.7 205.819 107.7 206.019 100.7 210.119 99.6 209.919"/>
                            <polygon className="cls-45"
                                     points="61.8 163.719 68.8 159.619 82.1 161.719 75 165.819 61.8 163.719"/>
                            <g className="cls-77">
                                <path className="cls-18"
                                      d="M393.8,165.8l7-4.1a1.4213,1.4213,0,0,1,.6.2,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3-.2-.1-.4-.1-.6-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-78" d="M393.9,165.8h.1C394,165.9,393.9,165.8,393.9,165.8Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-79">
                                <path className="cls-18" d="M393.8,165.8l7-4.1h.2l-7,4.1h-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-80">
                                <path className="cls-18"
                                      d="M419.5,210.1l7-4.1a.7638.7638,0,0,1,.5.2l-7,4.1a.7638.7638,0,0,0-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-81">
                                <path className="cls-18"
                                      d="M420,210.3l7-4.1a1.3444,1.3444,0,0,1,.7.6l-7,4.1a1.3444,1.3444,0,0,0-.7-.6"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17" d="M420.7,210.8l7-4.1c.2.2.3.5.5.7l-7,4.1c-.2-.2-.3-.5-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M421.2,211.5l7-4.1c.1.2.2.5.3.7a1.3824,1.3824,0,0,1-.4,1.6l-7,4.1a1.3824,1.3824,0,0,0,.4-1.6,4.8752,4.8752,0,0,1-.3-.7"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-46"
                                     points="116.8 235.719 123.8 231.619 123.8 233.319 116.7 237.419 116.8 235.719"/>
                            <polygon className="cls-49"
                                     points="102.7 211.119 109.8 207.019 110.1 207.219 103.1 211.319 102.7 211.119"/>
                            <g className="cls-82">
                                <path className="cls-18"
                                      d="M443.4,253.3l7-4.1a6.6371,6.6371,0,0,0,2,.6l-7,4.1a6.6371,6.6371,0,0,1-2-.6"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M445.4,253.8l7-4.1a3.1665,3.1665,0,0,0,1.6-.4l-7,4.1a2.2763,2.2763,0,0,1-1.6.4"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-46"
                                     points="119.8 239.119 126.9 235.019 126.8 240.019 119.7 244.119 119.8 239.119"/>
                            <g className="cls-83">
                                <path className="cls-25"
                                      d="M436.1,234.7l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1a1.2308,1.2308,0,0,1,.5-1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-84">
                                <path className="cls-25"
                                      d="M434.4,231.4l7-4.1a2.7681,2.7681,0,0,0,.3,1.3l-7,4.1a2.7681,2.7681,0,0,1-.3-1.3"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M434.7,232.7l7-4.1a1.7937,1.7937,0,0,0,.5.7l-7,4.1a1.7937,1.7937,0,0,1-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M435.2,233.5l7-4.1a4.3494,4.3494,0,0,0,.7.6l-7,4.1a4.3494,4.3494,0,0,1-.7-.6"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-85">
                                <path className="cls-17"
                                      d="M436.1,234.7l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1a.7494.7494,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M436.6,234.6l7-4.1a1.4213,1.4213,0,0,1,.6.2l-7,4.1a.7347.7347,0,0,0-.6-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-73"
                                     points="77 171.119 87 180.319 86.7 191.619 76.7 182.319 77 171.119"/>
                            <g className="cls-86">
                                <path className="cls-87"
                                      d="M438.5,244.1l7-4.1a13.6714,13.6714,0,0,0,2,2.9l-7,4.1a18.7235,18.7235,0,0,1-2-2.9"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-88"
                                      d="M440.5,247l7-4.1a13.121,13.121,0,0,0,2.8,2.4c.1,0,.1.1.2.1a5.3,5.3,0,0,0,2.7.8l-7,4.1a6.083,6.083,0,0,1-2.7-.8c-.1,0-.1-.1-.2-.1a13.121,13.121,0,0,1-2.8-2.4"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-87"
                                      d="M446.2,250.3l7-4.1a3.5132,3.5132,0,0,0,2-.5l-7,4.1a3.5132,3.5132,0,0,1-2,.5"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-89"
                                     points="119.8 239.119 126.9 235.019 137 240.519 129.9 244.619 119.8 239.119"/>
                            <polygon className="cls-49"
                                     points="118.4 234.719 125.4 230.619 132 234.219 125 238.319 118.4 234.719"/>
                            <polygon className="cls-49"
                                     points="117 234.019 124.1 229.919 125.9 230.919 118.9 235.019 117 234.019"/>
                            <g className="cls-90">
                                <path className="cls-91"
                                      d="M437.2,232.8l7-4.1a5.3815,5.3815,0,0,0,.4,2.2l-7,4.1a8.5056,8.5056,0,0,1-.4-2.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="103.1 211.319 110.1 207.219 113.8 209.219 106.8 213.319 103.1 211.319"/>
                            <g className="cls-92">
                                <path className="cls-91"
                                      d="M437.2,232.8l7-4.1a5.3815,5.3815,0,0,0,.4,2.2l-7,4.1a8.5056,8.5056,0,0,1-.4-2.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-78" d="M427.2,191.1Z" transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M407.8,181.9l1.1.2-.3,11.2L407,193l-1.5-1.4.3-11.2,1,1c.1.1.3.2.4.3A1.4213,1.4213,0,0,1,407.8,181.9Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-93">
                                <path className="cls-94"
                                      d="M448.6,250.3l7-4.1a3.6419,3.6419,0,0,1-1.6,3.2l-7,4.1a3.8863,3.8863,0,0,0,1.6-3.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-51"
                                     points="99.9 198.619 99.6 209.919 89.4 208.219 89.7 197.019 99.9 198.619"/>
                            <g className="cls-95">
                                <path className="cls-91"
                                      d="M448.6,249.6l7-4.1a1.38,1.38,0,0,1-.4.3l-7,4.1c.2-.2.3-.2.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-96"
                                     points="129.8 249.619 136.8 245.519 136.8 246.219 129.8 250.319 129.8 249.619"/>
                            <path className="cls-97"
                                  d="M448.6,249.6v.7c-.1,3.1-2.4,4.4-5.2,3l-.1-.1a10.2794,10.2794,0,0,1-4.8-8.4v-.7a12.9205,12.9205,0,0,0,4.8,5.3c.1,0,.1.1.2.1C445.5,250.6,447.3,250.5,448.6,249.6Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-46"
                                     points="103 199.619 110.1 195.519 109.8 207.019 102.7 211.119 103 199.619"/>
                            <polygon className="cls-46"
                                     points="103.3 203.719 110.3 199.619 110.1 207.219 103.1 211.319 103.3 203.719"/>
                            <polygon className="cls-49"
                                     points="76.1 166.419 83.1 162.319 95.7 174.019 88.6 178.119 76.1 166.419"/>
                            <polygon className="cls-49"
                                     points="118.9 235.019 125.9 230.919 131 233.719 123.9 237.819 118.9 235.019"/>
                            <g className="cls-98">
                                <path className="cls-25"
                                      d="M451.7,252l7-4.1c-.1,2.5-1,4.3-2.6,5.2l-7,4.1c1.6-.9,2.5-2.8,2.6-5.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="123.9 237.819 131 233.719 132 234.219 125 238.319 123.9 237.819"/>
                            <g className="cls-99">
                                <path className="cls-100"
                                      d="M442.3,235.5l7-4.1a5.3815,5.3815,0,0,0,.4,2.2l-7,4.1a5.3815,5.3815,0,0,1-.4-2.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="106.8 213.319 113.8 209.219 119.9 212.519 112.8 216.519 106.8 213.319"/>
                            <polygon className="cls-49"
                                     points="103 199.619 110.1 195.519 110.4 195.719 103.4 199.819 103 199.619"/>
                            <polygon className="cls-46"
                                     points="103.4 199.819 110.4 195.719 110.3 199.619 103.3 203.719 103.4 199.819"/>
                            <polygon className="cls-101"
                                     points="103.3 203.719 110.3 199.619 114 201.619 107 205.719 103.3 203.719"/>
                            <polygon className="cls-96"
                                     points="107 205.719 114 201.619 113.8 209.219 106.8 213.319 107 205.719"/>
                            <polygon className="cls-102"
                                     points="103.4 199.819 110.4 195.719 114.1 197.719 107.1 201.819 103.4 199.819"/>
                            <polygon className="cls-103"
                                     points="107.1 201.819 114.1 197.719 114 201.619 107 205.719 107.1 201.819"/>
                            <polygon className="cls-89"
                                     points="107 205.719 114 201.619 120.1 204.919 113 209.019 107 205.719"/>
                            <polygon className="cls-104"
                                     points="107.1 201.819 114.1 197.719 120.2 201.019 113.1 205.119 107.1 201.819"/>
                            <path className="cls-39"
                                  d="M420.4,195.3l1.9,1,9.7,5.3-.1,3.5-6-3.3-3.7-2-.4-.2-.3,11.4.4.2,3.7,2,6,3.3.2-7.5.1-3.6-.4,14.7-9.7-5.3-1.7-.9h.2a1.2683,1.2683,0,0,0,.6-.1,1.3824,1.3824,0,0,0,.4-1.6,3.5241,3.5241,0,0,0-1.4-2,1.69,1.69,0,0,0-.5-.2l-1.1-.2.3-11.2,2.1.3a1.2683,1.2683,0,0,0,.6-.1,1.3824,1.3824,0,0,0,.4-1.6A3.0105,3.0105,0,0,0,420.4,195.3Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-39"
                                     points="102.7 211.119 103 199.619 103.4 199.819 103.3 203.719 103.1 211.319 102.7 211.119"/>
                            <polygon className="cls-97"
                                     points="107 205.719 106.8 213.319 103.1 211.319 103.3 203.719 107 205.719"/>
                            <path className="cls-105"
                                  d="M448.7,244.6l-.1,5c-1.3,1-3.1,1-5.1-.1-.1,0-.1-.1-.2-.1a12.9205,12.9205,0,0,1-4.8-5.3l.1-5Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-106"
                                     points="129.9 244.619 137 240.519 136.8 245.519 129.8 249.619 129.9 244.619"/>
                            <polygon className="cls-46"
                                     points="115.9 220.119 122.9 216.019 122.6 227.319 115.6 231.419 115.9 220.119"/>
                            <polygon className="cls-106"
                                     points="113 209.019 120.1 204.919 119.9 212.519 112.8 216.519 113 209.019"/>
                            <polygon className="cls-107"
                                     points="113.1 205.419 120.1 201.319 120.1 204.919 113 209.019 113.1 205.419"/>
                            <polygon className="cls-40"
                                     points="113.1 205.119 113.1 205.419 113 209.019 107 205.719 107.1 201.819 113.1 205.119"/>
                            <polygon className="cls-46"
                                     points="113.1 205.419 120.1 201.319 119.8 216.019 112.7 220.119 113.1 205.419"/>
                            <polygon className="cls-46"
                                     points="116.2 208.919 123.2 204.819 122.9 216.019 115.9 220.119 116.2 208.919"/>
                            <g className="cls-108">
                                <path className="cls-25" d="M434.7,220l7-4.1v.1l-7,4.1V220"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="125 238.319 132 234.219 136.5 236.719 129.5 240.819 125 238.319"/>
                            <polygon className="cls-109"
                                     points="107.1 201.819 107 205.719 103.3 203.719 103.4 199.819 107.1 201.819"/>
                            <polygon className="cls-46"
                                     points="133 246.319 140.1 242.219 139.9 247.919 132.9 252.019 133 246.319"/>
                            <polygon className="cls-46"
                                     points="133.1 244.519 140.1 240.419 140.1 242.219 133 246.319 133.1 244.519"/>
                            <polygon className="cls-49"
                                     points="129.5 240.819 136.5 236.719 138.6 237.819 131.6 241.919 129.5 240.819"/>
                            <g className="cls-110">
                                <path className="cls-91"
                                      d="M448.8,239.1l7-4.1a3.3711,3.3711,0,0,1-.5,1.7l-7,4.1a2.1553,2.1553,0,0,0,.5-1.7"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-105"
                                     points="113 209.019 112.8 216.519 106.8 213.319 107 205.719 113 209.019"/>
                            <path className="cls-39"
                                  d="M450.4,241.9a3.11,3.11,0,0,1,1.5,2.6v1.8l-.1,5.7c-.1,2.5-1,4.3-2.6,5.2-1.7,1-3.9.7-6.1-.6a16.8586,16.8586,0,0,1-7.7-13.5l.1-5.7v-1.8a1,1,0,0,1,1.6-.9l6.6,3.6,4.5,2.5Zm-1.8,7.7.1-5-10.1-5.5-.1,5v.7a10.4208,10.4208,0,0,0,4.8,8.4l.1.1c2.8,1.4,5,.1,5.2-3v-.7"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-111">
                                <path className="cls-18"
                                      d="M450.4,241.9l7-4.1a4.3494,4.3494,0,0,1,.7.6l-7,4.1c-.2-.2-.5-.4-.7-.6"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17" d="M451.1,242.5l7-4.1c.2.2.3.5.5.7l-7,4.1c-.2-.2-.3-.5-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M451.6,243.2l7-4.1a2.7681,2.7681,0,0,1,.3,1.3l-7,4.1a3.0793,3.0793,0,0,0-.3-1.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="131.6 241.919 138.7 237.819 139.9 238.519 132.9 242.619 131.6 241.919"/>
                            <g className="cls-112">
                                <path className="cls-18"
                                      d="M451.7,242.6l7-4.1a1.4213,1.4213,0,0,0,.6.2l-7,4.1a1.4213,1.4213,0,0,1-.6-.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M452.3,242.8l7-4.1a.9015.9015,0,0,0,.5-.1l-7,4.1a.9015.9015,0,0,1-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-51"
                                     points="90.1 182.019 100.6 183.919 100.4 195.019 89.8 193.319 90.1 182.019"/>
                            <polygon className="cls-107"
                                     points="113.1 205.119 120.2 201.019 120.1 201.319 113.1 205.419 113.1 205.119"/>
                            <g className="cls-113">
                                <path className="cls-94"
                                      d="M453.3,241.7l7-4.1a1.2308,1.2308,0,0,1-.5,1l-7,4.1a1.3886,1.3886,0,0,0,.5-1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-39" d="M434.7,220.1l.3-11.3-.3,11.1Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-46"
                                     points="113.2 201.619 120.2 197.519 120.2 201.019 113.1 205.119 113.2 201.619"/>
                            <polygon className="cls-49"
                                     points="103.5 196.319 110.5 192.219 120.2 197.519 113.2 201.619 103.5 196.319"/>
                            <polygon className="cls-46"
                                     points="116.4 198.619 123.5 194.519 123.2 204.819 116.2 208.919 116.4 198.619"/>
                            <g className="cls-114">
                                <path className="cls-25"
                                      d="M435.7,197.6l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1a1.2308,1.2308,0,0,1,.5-1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-106"
                                     points="119.3 200.319 126.3 196.219 125.5 228.719 118.4 232.819 119.3 200.319"/>
                            <g className="cls-115">
                                <path className="cls-116"
                                      d="M435.7,197.6l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1a.7494.7494,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-117"
                                      d="M436.2,197.5l7-4.1a1.0721,1.0721,0,0,1,.6.2l-7,4.1a1.4213,1.4213,0,0,0-.6-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-118">
                                <path className="cls-91"
                                      d="M438.6,198.6l7-4.1a2.1553,2.1553,0,0,0-.5,1.7l-7,4.1a2.1553,2.1553,0,0,1,.5-1.7"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-89"
                                     points="118 197.719 125.1 193.619 126.8 194.519 119.8 198.619 118 197.719"/>
                            <path className="cls-105"
                                  d="M435.7,197.6a1.073,1.073,0,0,1,1.1.1l1.8,1a2.1553,2.1553,0,0,0-.5,1.7l-.8,32.4a5.3815,5.3815,0,0,0,.4,2.2l-1.8-1a3.11,3.11,0,0,1-1.5-2.6l.3-11.3V220l.3-11.1.3-10.3A.9507.9507,0,0,1,435.7,197.6Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-107"
                                     points="124.3 203.119 131.4 199.019 130.5 231.419 123.5 235.519 124.3 203.119"/>
                            <g className="cls-119">
                                <path className="cls-100"
                                      d="M443.7,201.4l7-4.1a2.1553,2.1553,0,0,0-.5,1.7l-7,4.1a2.1553,2.1553,0,0,1,.5-1.7"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-104"
                                     points="119.8 198.619 126.8 194.519 131.9 197.319 124.9 201.419 119.8 198.619"/>
                            <polygon className="cls-106"
                                     points="130.9 206.619 137.9 202.519 137.1 235.019 130 239.119 130.9 206.619"/>
                            <g className="cls-120">
                                <path className="cls-91"
                                      d="M449.2,204.4l7-4.1a5.7,5.7,0,0,1,.4,2.2l-7,4.1a4.3064,4.3064,0,0,0-.4-2.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-89"
                                     points="124.9 201.419 131.9 197.319 137.5 200.319 130.4 204.419 124.9 201.419"/>
                            <polygon className="cls-96"
                                     points="135.3 208.819 142.3 204.719 141.5 237.619 134.4 241.719 135.3 208.819"/>
                            <polygon className="cls-101"
                                     points="130.4 204.419 137.5 200.319 140.8 202.119 133.8 206.219 130.4 204.419"/>
                            <g className="cls-121">
                                <path className="cls-88"
                                      d="M452.6,206.2l7-4.1a4.3494,4.3494,0,0,1,.7.6l-7,4.1c-.2-.2-.5-.4-.7-.6"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-87"
                                      d="M453.3,206.8l7-4.1a3.0388,3.0388,0,0,1,.5.7l-7,4.1c-.2-.2-.3-.5-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-94"
                                      d="M453.8,207.5l7-4.1a2.7681,2.7681,0,0,1,.3,1.3l-7,4.1a3.0793,3.0793,0,0,0-.3-1.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-39"
                                  d="M452.8,202.8a9.4341,9.4341,0,0,1,4.4,7.7l-.1,4.7-.5,18.5-.2,9.7a3.3318,3.3318,0,0,1-1.5,3,3.3956,3.3956,0,0,1-3.1-.1v-1.8a3.2482,3.2482,0,0,0-1.5-2.6l1.2.7a.9781.9781,0,0,0,1.4-.2.952.952,0,0,0,.2-.7l.8-32.8a3.2482,3.2482,0,0,0-1.5-2.6l-3.4-1.8-5.6-3-5.1-2.7-1.8-1a.9781.9781,0,0,0-1.4.2,1.0775,1.0775,0,0,0-.2.8l-.3,10.3-.3,11.3-.3,11.3a3.2482,3.2482,0,0,0,1.5,2.6l1.8,1,5.1,2.7,1,.6-6.6-3.6a1.0754,1.0754,0,0,0-1.4.2,1.4453,1.4453,0,0,0-.2.7v1.8a9.5857,9.5857,0,0,1-4.3-7.7l.2-9.7.4-14.7v-.2l.1-3.5.1-4.7c.1-2.9,2.2-4.1,4.8-2.8l15.8,8.6C452.7,202.7,452.8,202.8,452.8,202.8Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-122">
                                <path className="cls-25"
                                      d="M456.4,243.4l7-4.1a3.3318,3.3318,0,0,1-1.5,3l-7,4.1a3.6939,3.6939,0,0,0,1.5-3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-45"
                                     points="88.6 178.119 95.7 174.019 108.9 176.319 101.8 180.319 88.6 178.119"/>
                            <polygon className="cls-46"
                                     points="103.8 183.119 110.9 179.019 110.5 192.219 103.5 196.319 103.8 183.119"/>
                            <g className="cls-123">
                                <path className="cls-25"
                                      d="M422.6,182.5l7-4.1c0,.2.1.4.1.6l-7,4.1a1.2683,1.2683,0,0,1-.1-.6"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-124">
                                <path className="cls-18"
                                      d="M420.6,180.3l7-4.1a.7638.7638,0,0,1,.5.2,2.0357,2.0357,0,0,1,.7.6l-7,4.1a4.3494,4.3494,0,0,0-.7-.6c-.1-.1-.3-.1-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M421.8,181.1l7-4.1c.2.2.3.5.5.7l-7,4.1a3.0388,3.0388,0,0,0-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M422.3,181.8l7-4.1c.1.2.2.5.3.7l-7,4.1a4.8752,4.8752,0,0,1-.3-.7"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-46"
                                     points="137.8 233.719 144.9 229.619 144.6 239.319 137.6 243.419 137.8 233.719"/>
                            <g className="cls-125">
                                <path className="cls-17"
                                      d="M433.6,194l7-4.1a1.8832,1.8832,0,0,1,1.5-.3l-7,4.1a1.8832,1.8832,0,0,0-1.5.3"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M435,193.6l7-4.1a4.1362,4.1362,0,0,1,1.9.5l-7,4.1a5.9181,5.9181,0,0,0-1.9-.5"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-126">
                                <path className="cls-17"
                                      d="M479.7,265.8l7-4.1c0,.1.1.1.1.2a.9984.9984,0,0,0,.4.5l-7,4.1c-.1-.2-.3-.3-.4-.5,0-.1,0-.1-.1-.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18" d="M480.2,266.5l7-4.1.2.2-7,4.1-.2-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-46"
                                     points="138.3 215.219 145.3 211.119 144.9 229.619 137.8 233.719 138.3 215.219"/>
                            <polygon className="cls-49"
                                     points="137.9 230.219 144.9 226.119 148.5 228.019 141.5 232.119 137.9 230.219"/>
                            <g className="cls-127">
                                <path className="cls-18"
                                      d="M480.7,267l7-4.1.1.1a1.4453,1.4453,0,0,0,.7.2l-7,4.1a1.8539,1.8539,0,0,1-.7-.2c0-.1,0-.1-.1-.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-128">
                                <path className="cls-25"
                                      d="M479.4,264.5l7-4.1a2.7681,2.7681,0,0,0,.3,1.3l-7,4.1a2.7681,2.7681,0,0,1-.3-1.3"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M479.7,265.8l7-4.1c0,.1.1.1.1.2a.9984.9984,0,0,0,.4.5l-7,4.1c-.1-.2-.3-.3-.4-.5,0-.1,0-.1-.1-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-105"
                                  d="M449.2,204.4a5.7,5.7,0,0,1,.4,2.2l-.8,32.4a3.3711,3.3711,0,0,1-.5,1.7l-4.5-2.5-1-.6a5.7,5.7,0,0,1-.4-2.2l.8-32.4a3.3711,3.3711,0,0,1,.5-1.7Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-40"
                                  d="M443.7,201.4a2.1553,2.1553,0,0,0-.5,1.7l-.8,32.4a5.3815,5.3815,0,0,0,.4,2.2l-5.1-2.7a5.7,5.7,0,0,1-.4-2.2l.8-32.4a3.3711,3.3711,0,0,1,.5-1.7Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-129">
                                <path className="cls-18"
                                      d="M480.7,267l7-4.1.1.1a1.4453,1.4453,0,0,0,.7.2l-7,4.1a1.8539,1.8539,0,0,1-.7-.2c0-.1,0-.1-.1-.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M481.6,267.3l7-4.1a.9015.9015,0,0,0,.5-.1l-7,4.1a1.0873,1.0873,0,0,1-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="150.3 252.619 157.4 248.519 167.7 258.019 160.7 262.119 150.3 252.619"/>
                            <polygon className="cls-46"
                                     points="160.7 262.119 167.7 258.019 167.7 260.419 160.6 264.519 160.7 262.119"/>
                            <polygon className="cls-46"
                                     points="138.1 222.719 145.1 218.619 144.9 226.119 137.9 230.219 138.1 222.719"/>
                            <g className="cls-130">
                                <path className="cls-25"
                                      d="M482.5,266.2l7-4.1a1.2308,1.2308,0,0,1-.5,1l-7,4.1a1.0155,1.0155,0,0,0,.5-1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="147.5 239.019 154.6 234.919 156.2 235.819 149.2 239.919 147.5 239.019"/>
                            <polygon className="cls-49"
                                     points="148.9 239.619 156 235.519 156.2 235.819 149.2 239.919 148.9 239.619"/>
                            <polygon className="cls-49"
                                     points="149.2 239.919 156.2 235.819 157.7 237.119 150.6 241.219 149.2 239.919"/>
                            <polygon className="cls-46"
                                     points="150.6 241.219 157.7 237.119 157.4 248.519 150.3 252.619 150.6 241.219"/>
                            <path className="cls-39"
                                  d="M479.4,264.5a2.822,2.822,0,0,0,.4,1.5,1.7937,1.7937,0,0,0,.5.7L467,254.4a3.2553,3.2553,0,0,1-1-2.3l.3-13.2,1.7.9,1.4,1.3-.3,11.4,10.3,9.5Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-46"
                                     points="163.8 263.719 170.8 259.619 170.8 262.119 163.7 266.219 163.8 263.719"/>
                            <polygon className="cls-49"
                                     points="141.5 232.119 148.5 228.019 154.7 231.319 147.6 235.419 141.5 232.119"/>
                            <g className="cls-131">
                                <path className="cls-25"
                                      d="M467.2,236.4l7-4.1a.9984.9984,0,0,0-.4.5,2.2469,2.2469,0,0,0,.2,1.8l-7,4.1a2.2922,2.2922,0,0,1-.2-1.8.9984.9984,0,0,1,.4-.5"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M467.1,238.7l7-4.1a1.7937,1.7937,0,0,0,.5.7l-7,4.1a1.1572,1.1572,0,0,1-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18" d="M467.5,239.4l7-4.1c.1.1.1.2.2.2l-7,4.1-.2-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="147.6 235.419 154.7 231.319 155 231.519 148 235.619 147.6 235.419"/>
                            <polygon className="cls-46"
                                     points="138.2 218.719 145.2 214.619 145.1 218.619 138.1 222.719 138.2 218.719"/>
                            <polygon className="cls-96"
                                     points="141.7 224.719 148.7 220.619 148.5 228.019 141.5 232.119 141.7 224.719"/>
                            <polygon className="cls-97"
                                     points="141.7 224.719 141.5 232.119 137.9 230.219 138.1 222.719 141.7 224.719"/>
                            <polygon className="cls-101"
                                     points="138.1 222.719 145.1 218.619 148.7 220.619 141.7 224.719 138.1 222.719"/>
                            <g className="cls-132">
                                <path className="cls-17"
                                      d="M467.2,236.4l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1a.9015.9015,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M467.7,236.3l7-4.1a1.8539,1.8539,0,0,1,.7.2,1.38,1.38,0,0,1,.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3a1.8539,1.8539,0,0,0-.7-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="150 236.819 157.1 232.719 158.1 233.719 151.1 237.819 150 236.819"/>
                            <polygon className="cls-133"
                                     points="138.2 218.719 145.2 214.619 148.8 216.619 141.8 220.719 138.2 218.719"/>
                            <polygon className="cls-134"
                                     points="141.8 220.719 141.7 224.719 138.1 222.719 138.2 218.719 141.8 220.719"/>
                            <polygon className="cls-135"
                                     points="141.8 220.719 148.8 216.619 148.7 220.619 141.7 224.719 141.8 220.719"/>
                            <path className="cls-97"
                                  d="M452.6,206.2a3.11,3.11,0,0,1,1.5,2.6l-.8,32.8a.9908.9908,0,0,1-.8,1.1.8437.8437,0,0,1-.7-.2l-1.3-.7-2.1-1.1a2.1553,2.1553,0,0,0,.5-1.7l.8-32.4a5.3815,5.3815,0,0,0-.4-2.2Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-59"
                                     points="161 250.819 168 246.719 167.7 258.019 160.7 262.119 161 250.819"/>
                            <polygon className="cls-73"
                                     points="150.3 252.619 150.6 241.219 161 250.819 160.7 262.119 150.3 252.619"/>
                            <polygon className="cls-58"
                                     points="150.6 241.219 157.7 237.119 168 246.719 161 250.819 150.6 241.219"/>
                            <polygon className="cls-89"
                                     points="141.7 224.719 148.7 220.619 154.8 223.919 147.8 228.019 141.7 224.719"/>
                            <polygon className="cls-105"
                                     points="147.8 228.019 147.6 235.419 141.5 232.119 141.7 224.719 147.8 228.019"/>
                            <polygon className="cls-106"
                                     points="147.8 228.019 154.8 223.919 154.7 231.319 147.6 235.419 147.8 228.019"/>
                            <polygon className="cls-49"
                                     points="161 250.819 168 246.719 169.1 247.719 162 251.819 161 250.819"/>
                            <g className="cls-136">
                                <path className="cls-18" d="M480.8,251.8l7-4.1c.1.1.3.2.4.3l-7,4.1c-.1-.1-.3-.2-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-104"
                                     points="141.8 220.719 148.8 216.619 154.9 219.919 147.9 224.019 141.8 220.719"/>
                            <polygon className="cls-49"
                                     points="138.3 215.219 145.3 211.119 155 216.419 148 220.519 138.3 215.219"/>
                            <polygon className="cls-46"
                                     points="138.4 210.519 145.4 206.419 145.3 211.119 138.3 215.219 138.4 210.519"/>
                            <polygon className="cls-49"
                                     points="118.1 194.119 125.2 190.119 140.9 198.619 133.9 202.719 118.1 194.119"/>
                            <g className="cls-137">
                                <path className="cls-18" d="M452.7,202.7l7-4.1a.0979.0979,0,0,1,.1.1l-7,4.1-.1-.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-138">
                                <path className="cls-18"
                                      d="M481.3,252.1l7-4.1c.2.1.3.2.5.2l-7,4.1a.7638.7638,0,0,1-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-139">
                                <path className="cls-25"
                                      d="M492.7,266.7l7-4.1a2.7681,2.7681,0,0,0,.3,1.3l-7,4.1a3.0793,3.0793,0,0,1-.3-1.3"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M493,268l7-4.1c0,.1.1.1.1.2a.9984.9984,0,0,0,.4.5l-7,4.1c-.1-.2-.3-.3-.4-.5,0-.1,0-.2-.1-.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M493.5,268.7l7-4.1a4.3494,4.3494,0,0,0,.7.6,1.4453,1.4453,0,0,0,.7.2l-7,4.1a1.8539,1.8539,0,0,1-.7-.2,4.3494,4.3494,0,0,1-.7-.6"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M494.9,269.5l7-4.1a.9015.9015,0,0,0,.5-.1l-7,4.1a4.3311,4.3311,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-140">
                                <path className="cls-25"
                                      d="M495.8,268.4l7-4.1a1.2308,1.2308,0,0,1-.5,1l-7,4.1c.4-.3.6-.6.5-1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-46"
                                     points="177.1 267.119 184.1 263.019 184.1 264.319 177 268.419 177.1 267.119"/>
                            <polygon className="cls-49"
                                     points="177.1 267.119 184.1 263.019 194.1 272.319 187 276.419 177.1 267.119"/>
                            <polygon className="cls-59"
                                     points="187.3 265.119 194.4 261.019 194.1 272.319 187 276.419 187.3 265.119"/>
                            <polygon className="cls-45"
                                     points="163.8 263.719 170.8 259.619 181 261.319 174 265.419 163.8 263.719"/>
                            <polygon className="cls-46"
                                     points="174 265.419 181 261.319 181 262.619 173.9 266.719 174 265.419"/>
                            <polygon className="cls-53"
                                     points="174.2 254.219 181.3 250.119 181 261.319 174 265.419 174.2 254.219"/>
                            <polygon className="cls-46"
                                     points="177.3 255.819 184.4 251.719 184.1 263.019 177.1 267.119 177.3 255.819"/>
                            <polygon className="cls-58"
                                     points="177.3 255.819 184.4 251.719 194.4 261.019 187.3 265.119 177.3 255.819"/>
                            <polygon className="cls-49"
                                     points="187.3 265.119 194.4 261.019 195.4 262.019 188.4 266.119 187.3 265.119"/>
                            <g className="cls-141">
                                <path className="cls-18"
                                      d="M507.2,266.1l7-4.1c.1.1.3.2.4.3a1.4456,1.4456,0,0,0,.7.2l-7,4.1a1.8539,1.8539,0,0,1-.7-.2c-.1-.1-.3-.2-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M508.3,266.6l7-4.1a.9015.9015,0,0,0,.5-.1l-7,4.1c-.2.1-.3.2-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-142">
                                <polyline className="cls-17"
                                          points="190 266.519 197 262.419 197 262.419 190 266.519 190 266.519"/>
                            </g>
                            <polygon className="cls-46"
                                     points="164.1 252.519 171.1 248.419 170.8 259.619 163.8 263.719 164.1 252.519"/>
                            <polygon className="cls-52"
                                     points="164.1 252.519 171.1 248.419 181.3 250.119 174.2 254.219 164.1 252.519"/>
                            <polygon className="cls-45"
                                     points="174.2 254.219 181.3 250.119 182.9 250.319 175.8 254.419 174.2 254.219"/>
                            <polygon className="cls-49"
                                     points="175.8 254.419 182.9 250.319 184.4 251.719 177.3 255.819 175.8 254.419"/>
                            <polygon className="cls-49"
                                     points="177.4 252.119 184.5 248.019 194.5 257.319 187.4 261.419 177.4 252.119"/>
                            <g className="cls-143">
                                <path className="cls-25"
                                      d="M509.2,266.1l7-4.1a.9984.9984,0,0,1-.4.5l-7,4.1a1.7556,1.7556,0,0,0,.4-.5"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="187.4 261.419 194.5 257.319 196.5 259.219 189.4 263.319 187.4 261.419"/>
                            <g className="cls-144">
                                <path className="cls-18" d="M508.2,263.3l7-4.1.2.2-7,4.1c0-.1-.1-.1-.2-.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17" d="M508.5,263.5l7-4.1c.2.2.3.5.5.7l-7,4.1c-.2-.2-.3-.5-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M508.9,264.2l7-4.1a2.2922,2.2922,0,0,1,.2,1.8l-7,4.1a1.944,1.944,0,0,0-.2-1.8"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-45"
                                     points="163 252.319 170 248.219 171.1 248.419 164.1 252.519 163 252.319"/>
                            <polygon className="cls-107"
                                     points="147.9 224.019 154.9 219.919 154.8 223.919 147.8 228.019 147.9 224.019"/>
                            <polygon className="cls-40"
                                     points="147.9 224.019 147.8 228.019 141.7 224.719 141.8 220.719 147.9 224.019"/>
                            <polygon className="cls-49"
                                     points="147.9 224.019 154.9 219.919 155.3 220.119 148.3 224.219 147.9 224.019"/>
                            <polygon className="cls-39"
                                     points="148.3 224.219 148 235.619 147.6 235.419 147.8 228.019 147.9 224.019 148.3 224.219"/>
                            <polygon className="cls-46"
                                     points="148.3 224.219 155.3 220.119 155 231.519 148 235.619 148.3 224.219"/>
                            <g className="cls-145">
                                <path className="cls-25"
                                      d="M467.6,221.4l7-4.1a.9984.9984,0,0,0-.4.5,2.2469,2.2469,0,0,0,.2,1.8l-7,4.1a2.2922,2.2922,0,0,1-.2-1.8,1.7556,1.7556,0,0,1,.4-.5"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M467.4,223.7l7-4.1a1.7937,1.7937,0,0,0,.5.7l-7,4.1a4.2335,4.2335,0,0,1-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M467.9,224.5l7-4.1c.1.1.1.2.2.2l-7,4.1a.2151.2151,0,0,0-.2-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-146">
                                <path className="cls-17"
                                      d="M467.6,221.4l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1a4.3311,4.3311,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M468.1,221.3l7-4.1a1.8539,1.8539,0,0,1,.7.2l-7,4.1a2.5439,2.5439,0,0,0-.7-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="151.1 237.819 158.1 233.719 168.1 243.019 161.1 247.119 151.1 237.819"/>
                            <polygon className="cls-49"
                                     points="161.1 247.119 168.1 243.019 169.6 244.419 162.6 248.519 161.1 247.119"/>
                            <polygon className="cls-49"
                                     points="149.3 224.719 156.4 220.619 158.4 222.519 151.4 226.619 149.3 224.719"/>
                            <polygon className="cls-46"
                                     points="151.4 226.619 158.4 222.519 158.1 233.719 151.1 237.819 151.4 226.619"/>
                            <polygon className="cls-58"
                                     points="151.4 226.619 158.4 222.519 168.4 231.819 161.3 235.919 151.4 226.619"/>
                            <polygon className="cls-59"
                                     points="161.3 235.919 168.4 231.819 168.1 243.019 161.1 247.119 161.3 235.919"/>
                            <polygon className="cls-49"
                                     points="161.3 235.919 168.4 231.819 169.4 232.719 162.4 236.819 161.3 235.919"/>
                            <g className="cls-147">
                                <path className="cls-18"
                                      d="M481.2,236.8l7-4.1a2.1859,2.1859,0,0,0,.5.3l-7,4.1a.55.55,0,0,1-.5-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-148">
                                <path className="cls-18" d="M481.6,237.2l7-4.1c.2.1.3.2.5.2l-7,4.1c-.1-.1-.3-.1-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-45"
                                     points="162.6 248.519 169.6 244.419 171.2 244.719 164.2 248.819 162.6 248.519"/>
                            <polygon className="cls-46"
                                     points="164.4 237.519 171.5 233.419 171.2 244.719 164.2 248.819 164.4 237.519"/>
                            <polygon className="cls-45"
                                     points="163.4 237.419 170.4 233.319 171.5 233.419 164.4 237.519 163.4 237.419"/>
                            <polygon className="cls-52"
                                     points="164.4 237.519 171.5 233.419 181.7 235.119 174.6 239.219 164.4 237.519"/>
                            <polygon className="cls-45"
                                     points="164.2 248.819 171.2 244.719 181.4 246.319 174.3 250.419 164.2 248.819"/>
                            <polygon className="cls-53"
                                     points="174.6 239.219 181.7 235.119 181.4 246.319 174.3 250.419 174.6 239.219"/>
                            <polygon className="cls-45"
                                     points="174.6 239.219 181.7 235.119 183.2 235.419 176.2 239.519 174.6 239.219"/>
                            <polygon className="cls-49"
                                     points="176.2 239.519 183.2 235.419 184.8 236.819 177.7 240.919 176.2 239.519"/>
                            <polygon className="cls-45"
                                     points="174.3 250.419 181.4 246.319 182.5 246.519 175.4 250.619 174.3 250.419"/>
                            <g className="cls-149">
                                <path className="cls-18"
                                      d="M494.2,250.6l7-4.1a.7638.7638,0,0,1,.5.2l-7,4.1a.7638.7638,0,0,0-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-150">
                                <path className="cls-18"
                                      d="M494.7,250.8l7-4.1a1.38,1.38,0,0,1,.4.3l-7,4.1c0-.1-.2-.2-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="176.4 251.219 183.4 247.119 184.5 248.019 177.4 252.119 176.4 251.219"/>
                            <polygon className="cls-46"
                                     points="177.7 240.919 184.8 236.819 184.5 248.019 177.4 252.119 177.7 240.919"/>
                            <polygon className="cls-58"
                                     points="177.7 240.919 184.8 236.819 194.8 246.119 187.7 250.219 177.7 240.919"/>
                            <polygon className="cls-59"
                                     points="187.7 250.219 194.8 246.119 194.5 257.319 187.4 261.419 187.7 250.219"/>
                            <polygon className="cls-49"
                                     points="187.7 250.219 194.8 246.119 195.8 247.019 188.8 251.119 187.7 250.219"/>
                            <g className="cls-151">
                                <path className="cls-18"
                                      d="M507.6,251.1l7-4.1c.1.1.3.2.4.3a1.4453,1.4453,0,0,0,.7.2l-7,4.1a1.8539,1.8539,0,0,1-.7-.2c-.2,0-.3-.1-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M508.7,251.7l7-4.1a.9015.9015,0,0,0,.5-.1l-7,4.1a.9015.9015,0,0,1-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-45"
                                     points="164.5 233.819 171.6 229.719 181.8 231.419 174.7 235.519 164.5 233.819"/>
                            <polygon className="cls-45"
                                     points="174.7 235.519 181.8 231.419 182.8 231.619 175.8 235.719 174.7 235.519"/>
                            <g className="cls-152">
                                <path className="cls-18"
                                      d="M494.6,235.7l7-4.1a.7638.7638,0,0,1,.5.2l-7,4.1a.7638.7638,0,0,0-.5-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-153">
                                <path className="cls-18"
                                      d="M495.1,235.9l7-4.1a1.38,1.38,0,0,1,.4.3l-7,4.1a1.38,1.38,0,0,0-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="176.8 236.219 183.8 232.119 184.9 233.119 177.8 237.219 176.8 236.219"/>
                            <polygon className="cls-49"
                                     points="177.8 237.219 184.9 233.119 194.8 242.419 187.8 246.519 177.8 237.219"/>
                            <polygon className="cls-53"
                                     points="175 224.219 182 220.119 181.8 231.419 174.7 235.519 175 224.219"/>
                            <polygon className="cls-46"
                                     points="178.1 225.919 185.2 221.819 184.9 233.119 177.8 237.219 178.1 225.919"/>
                            <polygon className="cls-73"
                                     points="178.1 225.919 188.1 235.219 187.8 246.519 177.8 237.219 178.1 225.919"/>
                            <path className="cls-39"
                                  d="M493.4,239.2l1.6.3,1.5,1.4-.3,11.2-1.1-1c-.1-.1-.3-.2-.4-.3-.2-.1-.3-.2-.5-.2l-1.1-.2Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-73"
                                     points="177.4 252.119 177.7 240.919 187.7 250.219 187.4 261.419 177.4 252.119"/>
                            <polygon className="cls-49"
                                     points="151.1 222.519 158.1 218.419 168.5 228.019 161.4 232.119 151.1 222.519"/>
                            <polygon className="cls-59"
                                     points="161.7 220.919 168.8 216.819 168.5 228.019 161.4 232.119 161.7 220.919"/>
                            <polygon className="cls-49"
                                     points="161.4 232.119 168.5 228.019 170 229.519 163 233.619 161.4 232.119"/>
                            <polygon className="cls-45"
                                     points="163 233.619 170 229.519 171.6 229.719 164.5 233.819 163 233.619"/>
                            <polygon className="cls-46"
                                     points="164.8 222.619 171.9 218.519 171.6 229.719 164.5 233.819 164.8 222.619"/>
                            <polygon className="cls-52"
                                     points="164.8 222.619 171.9 218.519 182 220.119 175 224.219 164.8 222.619"/>
                            <polygon className="cls-49"
                                     points="187.8 246.519 194.8 242.419 196.9 244.219 189.8 248.319 187.8 246.519"/>
                            <g className="cls-154">
                                <path className="cls-18" d="M508.6,248.3l7-4.1.2.2-7,4.1-.2-.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17" d="M508.9,248.6l7-4.1c.2.2.3.5.5.7l-7,4.1c-.2-.3-.4-.5-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M509.3,249.3l7-4.1a2.6626,2.6626,0,0,1,.3,1.2v.2a.6012.6012,0,0,1-.1.4.9984.9984,0,0,1-.4.5l-7,4.1a.9984.9984,0,0,0,.4-.5.6012.6012,0,0,0,.1-.4v-.2a2.6626,2.6626,0,0,0-.3-1.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-46"
                                     points="175.1 221.819 182.1 217.719 182 220.119 175 224.219 175.1 221.819"/>
                            <polygon className="cls-58"
                                     points="178.1 225.919 185.2 221.819 195.1 231.119 188.1 235.219 178.1 225.919"/>
                            <polygon className="cls-46"
                                     points="178.2 223.519 185.2 219.419 185.2 221.819 178.1 225.919 178.2 223.519"/>
                            <g className="cls-155">
                                <path className="cls-18" d="M496,221.3l7-4.1.2.2-7,4.1-.2-.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M496.2,221.5l7-4.1c.2.2.3.5.5.7l-7,4.1a4.2335,4.2335,0,0,0-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M496.6,222.2l7-4.1a2.7681,2.7681,0,0,1,.3,1.3l-7,4.1a1.5166,1.5166,0,0,0-.3-1.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-59"
                                     points="188.1 235.219 195.1 231.119 194.8 242.419 187.8 246.519 188.1 235.219"/>
                            <path className="cls-39"
                                  d="M509,233.4a3.2117,3.2117,0,0,1,1,2.2l-.4,14.9a3.2117,3.2117,0,0,0-1-2.2l-2-1.9.3-11.2-10-9.3.1-2.4a3.2117,3.2117,0,0,0-1-2.2Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M508.6,248.3l-2-1.9h0l-10-9.3-1.1-1c-.1-.1-.3-.2-.4-.3a1.69,1.69,0,0,0-.5-.2l-1.1-.2-10.2-1.7-1.6-.3-1.5-1.4-10.3-9.6-.7-.6c-.1-.1-.3-.2-.4-.3-.7-.4-1.3-.3-1.6.4a2.9579,2.9579,0,0,0,.9,2.8l2,1.9,10,9.3,1,1a2.1859,2.1859,0,0,0,.5.3c.2.1.3.2.5.2l1.1.2,10.2,1.7,1.6.3,1.5,1.4,10,9.3,1,1c.1.1.3.2.4.3a1.2623,1.2623,0,0,0,1.2.1.9984.9984,0,0,0,.4-.5.6012.6012,0,0,0,.1-.4v-.2A3.2553,3.2553,0,0,0,508.6,248.3Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M468.1,224.7l2,1.9-.3,11.2-1-1c-.1-.1-.3-.2-.4-.3-.7-.4-1.3-.3-1.5.4a2.9579,2.9579,0,0,0,.9,2.8l.2.2-1.7-.9-9.7-5.3.5-18.5,9.7,5.3,1.9,1a1.0709,1.0709,0,0,0-1.4.1c-.1.1-.1.2-.2.3A3.2845,3.2845,0,0,0,468.1,224.7Zm-1.3,10.9.3-11.4-.4-.2-6.1-3.3-3.6-2-.1,4-.2,7.5,3.6,2,6.1,3.3.4.1"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M508.2,263.3l-2-1.9-10-9.3-1.1-1c-.1-.1-.3-.2-.4-.3-.2-.1-.3-.2-.5-.2l-1.1-.2-10.2-1.7-1.6-.3-1.5-1.4-10-9.3-1-1c-.1-.1-.3-.2-.4-.3-.7-.4-1.3-.3-1.5.4a2.9579,2.9579,0,0,0,.9,2.8l.2.2,1.4,1.3,10.3,9.6,1.1,1c.1.1.3.2.4.3.2.1.3.2.5.2l1.1.2,10.2,1.7,1.6.3,1.5,1.4,10,9.3,1.1,1c.1.1.3.2.4.3a1.2623,1.2623,0,0,0,1.2.1.9984.9984,0,0,0,.4-.5A2.8468,2.8468,0,0,0,508.2,263.3Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M509.6,251.1a.9984.9984,0,0,1-.4.5,1.2868,1.2868,0,0,1-1.2-.1c-.1-.1-.2-.1-.3-.2l-.1-.1-1-1h0l-.3,11.2,2,1.9a2.8842,2.8842,0,0,1,.9,2.8.9984.9984,0,0,1-.4.5,1.2868,1.2868,0,0,1-1.2-.1,1.38,1.38,0,0,1-.4-.3l-1.1-1-.3,11.2-10-9.3v1.3a1.2308,1.2308,0,0,1-.5,1,1.2868,1.2868,0,0,1-1.2-.1,2.66,2.66,0,0,1-1-1.1,2.6041,2.6041,0,0,1-.4-1.5v-1.3l-10.2-1.7-.1,2.4a1.2308,1.2308,0,0,1-.5,1,1.2868,1.2868,0,0,1-1.2-.1l-.1-.1.1.1c.2.1.3.2.5.2l12.8,2.1L506.6,281c.1.1.3.2.4.3a1.1628,1.1628,0,0,0,1,.2c.1,0,.1,0,.2-.1a1.2308,1.2308,0,0,0,.5-1l.8-29.8A1.0873,1.0873,0,0,1,509.6,251.1Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <path className="cls-39"
                                  d="M481.8,252.3a.7638.7638,0,0,1-.5-.2,1.38,1.38,0,0,1-.4-.3l-1.1-1h0l-.3,11.3-.1,2.4a2.822,2.822,0,0,0,.4,1.5,1.7937,1.7937,0,0,0,.5.7l.3.3h0l.1.1a1.2623,1.2623,0,0,0,1.2.1,1.2308,1.2308,0,0,0,.5-1l.1-2.4.3-11.2Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-156">
                                <path className="cls-18"
                                      d="M452.8,202.8l7-4.1a6.48,6.48,0,0,1,2,1.7l-7,4.1a6.48,6.48,0,0,0-2-1.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M454.8,204.5l7-4.1a7.4424,7.4424,0,0,1,1.4,2.2l-7,4.1a6.9229,6.9229,0,0,0-1.4-2.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M456.2,206.6l7-4.1a8.6826,8.6826,0,0,1,1,3.9l-7,4.1a7.8174,7.8174,0,0,0-1-3.9"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="148 220.519 155 216.419 157 217.419 149.9 221.519 148 220.519"/>
                            <g className="cls-157">
                                <path className="cls-18"
                                      d="M468.8,221.5l7-4.1a1.38,1.38,0,0,1,.4.3l-7,4.1c-.1,0-.3-.2-.4-.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="150.4 221.919 157.4 217.819 158.1 218.419 151.1 222.519 150.4 221.919"/>
                            <polygon className="cls-73"
                                     points="151.1 237.819 151.4 226.619 161.3 235.919 161.1 247.119 151.1 237.819"/>
                            <g className="cls-158">
                                <path className="cls-25" d="M508.4,281.5l7-4.1h0l-7,4.1h0"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-39"
                                  d="M481.6,237.2c.2.1.3.2.5.2l1.1.2-.3,11.2-1.6-.3-1.5-1.4.3-11.2,1,1A2.1859,2.1859,0,0,1,481.6,237.2Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-51"
                                     points="163.8 263.719 164.1 252.519 174.2 254.219 174 265.419 163.8 263.719"/>
                            <g className="cls-159">
                                <path className="cls-25"
                                      d="M508.9,280.5l7-4.1a1.2308,1.2308,0,0,1-.5,1l-7,4.1a1.2308,1.2308,0,0,0,.5-1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-46"
                                     points="151.4 211.419 158.4 207.319 158.1 218.419 151.1 222.519 151.4 211.419"/>
                            <path className="cls-39"
                                  d="M493,254.2l1.6.3,1.5,1.4-.3,11.2v1.3a1.2308,1.2308,0,0,1-.5,1,1.2868,1.2868,0,0,1-1.2-.1,2.66,2.66,0,0,1-1-1.1,2.6041,2.6041,0,0,1-.4-1.5v-1.3Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-160">
                                <path className="cls-17"
                                      d="M467.6,206.3l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1a.7494.7494,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M468.1,206.2l7-4.1a1.4213,1.4213,0,0,1,.6.2l-7,4.1a1.4213,1.4213,0,0,0-.6-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <g className="cls-161">
                                <path className="cls-18"
                                      d="M468.7,206.4l7-4.1a1.7556,1.7556,0,0,1,.5.4l-7,4.1a.9984.9984,0,0,0-.5-.4"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-73"
                                     points="177.1 267.119 177.3 255.819 187.3 265.119 187 276.419 177.1 267.119"/>
                            <polygon className="cls-73"
                                     points="151.1 222.519 151.4 211.419 161.7 220.919 161.4 232.119 151.1 222.519"/>
                            <polygon className="cls-58"
                                     points="151.4 211.419 158.4 207.319 168.8 216.819 161.7 220.919 151.4 211.419"/>
                            <polygon className="cls-46"
                                     points="161.7 219.619 168.8 215.519 168.8 216.819 161.7 220.919 161.7 219.619"/>
                            <g className="cls-162">
                                <path className="cls-25"
                                      d="M481,218.6l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1a1.3886,1.3886,0,0,1,.5-1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-51"
                                     points="164.2 248.819 164.4 237.519 174.6 239.219 174.3 250.419 164.2 248.819"/>
                            <polygon className="cls-46"
                                     points="164.9 221.319 171.9 217.219 171.9 218.519 164.8 222.619 164.9 221.319"/>
                            <g className="cls-163">
                                <path className="cls-17"
                                      d="M481,218.6l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1a.9015.9015,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M481.5,218.5l7-4.1a1.4213,1.4213,0,0,1,.6.2h0l-7,4.1h0a1.4213,1.4213,0,0,0-.6-.2"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-49"
                                     points="150.4 206.719 157.4 202.619 170.4 214.519 163.3 218.619 150.4 206.719"/>
                            <g className="cls-164">
                                <path className="cls-18"
                                      d="M482.2,218.7l7-4.1a1.3444,1.3444,0,0,1,.7.6l-7,4.1c-.2-.2-.5-.4-.7-.6"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17" d="M482.9,219.3l7-4.1c.2.2.3.5.5.7l-7,4.1c-.2-.3-.4-.5-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M483.3,220l7-4.1a2.7681,2.7681,0,0,1,.3,1.3l-7,4.1a2.0818,2.0818,0,0,0-.3-1.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-39"
                                  d="M482.2,218.7a3.3621,3.3621,0,0,1,1.5,2.6v1.3l-.3,11.2-1.6-.3-1.5-1.4.3-11.2v-1.3a.9908.9908,0,0,1,.8-1.1,1.2025,1.2025,0,0,1,.8.2Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-51"
                                     points="164.8 222.619 175 224.219 174.7 235.519 164.5 233.819 164.8 222.619"/>
                            <polygon className="cls-46"
                                     points="190.8 250.719 197.9 246.619 197.1 276.419 190.1 280.519 190.8 250.719"/>
                            <g className="cls-165">
                                <path className="cls-25"
                                      d="M494.3,220.8l7-4.1a1.2308,1.2308,0,0,0-.5,1l-7,4.1a1.2308,1.2308,0,0,1,.5-1"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <path className="cls-39"
                                  d="M482.2,218.7c-.9-.5-1.6-.1-1.6.9v1.3l-10.3-9.5-.3,11.1-.7-.6c-.1-.1-.2-.2-.3-.2l-2.1-1.2.3-13.2a.9908.9908,0,0,1,.8-1.1,1.2025,1.2025,0,0,1,.8.2,1.7556,1.7556,0,0,1,.5.4l12.9,11.9,12.8,2.1c-.6-.1-1,.4-1,1.1l-.1,2.4-10.2-1.7v-1.3A3.5307,3.5307,0,0,0,482.2,218.7Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <g className="cls-166">
                                <path className="cls-17"
                                      d="M494.3,220.8l7-4.1a.7494.7494,0,0,1,.5-.1l-7,4.1a1.0873,1.0873,0,0,0-.5.1"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-18"
                                      d="M494.8,220.7l7-4.1h.1a1.4213,1.4213,0,0,1,.6.2h0a.0979.0979,0,0,1,.1.1h.1a.0979.0979,0,0,1,.1.1l.1.1a.0979.0979,0,0,1,.1.1l-7,4.1-.1-.1-.1-.1a.0979.0979,0,0,1-.1-.1h-.1a.0979.0979,0,0,1-.1-.1h0a1.4453,1.4453,0,0,0-.7-.2h0"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                            <polygon className="cls-45"
                                     points="163.3 218.619 170.4 214.519 183.1 216.619 176.1 220.719 163.3 218.619"/>
                            <path className="cls-39"
                                  d="M496,221.3a3.2117,3.2117,0,0,1,1,2.2l-.1,2.4-.3,11.2-1.1-1c-.1-.1-.3-.2-.4-.3a1.69,1.69,0,0,0-.5-.2l-1.1-.2.3-11.2.1-2.4c0-.8.5-1.2,1-1.1a1.4213,1.4213,0,0,1,.6.2h0a.0979.0979,0,0,1,.1.1h.1a.0979.0979,0,0,1,.1.1l.1.1Z"
                                  transform="translate(-318.8 0.0194)"/>
                            <polygon className="cls-46"
                                     points="191.2 235.619 198.3 231.519 197.9 246.419 190.8 250.519 191.2 235.619"/>
                            <polygon className="cls-49"
                                     points="177.2 221.319 184.2 217.219 197.3 229.319 190.2 233.419 177.2 221.319"/>
                            <g className="cls-167">
                                <path className="cls-18" d="M509,233.4l7-4.1.2.2-7,4.1a.2151.2151,0,0,0-.2-.2"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-17"
                                      d="M509.2,233.6l7-4.1a3.0388,3.0388,0,0,1,.5.7l-7,4.1a3.0388,3.0388,0,0,0-.5-.7"
                                      transform="translate(-318.8 0.0194)"/>
                                <path className="cls-25"
                                      d="M509.7,234.3l7-4.1a2.7681,2.7681,0,0,1,.3,1.3l-7,4.1a3.0793,3.0793,0,0,0-.3-1.3"
                                      transform="translate(-318.8 0.0194)"/>
                            </g>
                        </g>
                    </svg>
                </div>

                <p>
                    Know position of any satellite anytime. Past, future or present.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>


            <RedocStandalone
                options={{
                    "disableSearch": true,
                    "expandResponses": "200",
                    "hideDownloadButton": true,
                    "hideHostname": false,
                    "hideLoading": true,
                    "pathInMiddlePanel": true,
                    "sortPropsAlphabetically": true,
                    "theme": defaultTheme,
                }}
                specUrl="https://tle.ivanstanojevic.me/api/tle/json"/>

        </div>
    );
};

export default App;
