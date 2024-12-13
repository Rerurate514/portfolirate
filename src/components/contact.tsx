import CountUp from "react-countup"
import '../css/contact.scss'
import { SectionNumber } from "./sectionNumber"

export const Contact = () => {
    return <div className="futura-font-light margin-32 flex left-margin-10 right-margin-10 top-margin-5">
    <div className="width-max">
        <div className="flex underLine">
            <div className="back-black flex">
                <div className="ct-circle flex center">
                    <p className="no-margin font-128 accent">
                        <strong>R</strong>
                    </p>
                </div>
                <div className="ct-circle flex center">
                    <p className="no-margin font-128 accent">
                        <strong>E</strong>
                    </p>
                </div>
            </div>
            <div className="flex bottom-text left-margin-5 right-margin-10">
                <div className="futura-font-light">
                    <SectionNumber num={7} text={"contact"} />
                </div>
            </div>
            <div className="back-black font-64 right-padding-5 left-padding-5 flex center shadow">
                <div className="black-draw">
                    <strong>CONNECT</strong>
                </div>
            </div>
        </div>
        <div className="def-margin-top">
            <div className="flex justify-sa">
                <div className="left-text top-margin-5">
                    <p className="no-margin initial">If you want to connect to me,</p>
                    <p className="no-margin">send something from these links.</p>
                </div>
                <a href="https://github.com/Rerurate514">
                    <svg className="padding-16" height={128} width={128} viewBox="0 0 128 128">
                        <g className="b-f">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                        </g>
                    </svg>
                    <p className="font-32 no-margin">Github</p>
                </a>
                <a href="https://x.com/rerurate">
                    <svg className="padding-32" viewBox="0 0 128 128" height={96} width={96} >
                        <path className="b-f" d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"></path>
                    </svg>
                    <p className="font-32 no-margin">Twitter</p>
                </a>
                <div>
                    <svg className="w-s b-f padding-16" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <p className="font-16">s2312130@st.tohtech.ac.jp</p>
                </div>
            </div>
        </div>
    </div>
</div>
}