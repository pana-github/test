import React, { useState} from 'react';


const SearchForm = () => {
    const [focusedField, setFocusedField] = useState(null);

    const handleFocus = (event) => {
        const inputParent = event.target.closest('.form__group');
        inputParent.classList.add('focused');
        setFocusedField(event.target);
    };

    const handleBlur = (event) => {
        const inputParent = event.target.closest('.form__group');
        const inputValue = event.target.value;
        if (inputValue === '') {
            event.target.classList.remove('filled');
            inputParent.classList.remove('focused');
        } else {
            event.target.classList.add('filled');
        }
        setFocusedField(null);
    };

    const [activeButton,setActiveButton]=useState('action__element--search')

    const handleOnClick=(event)=>{
        const buttonTextList= ['検索', '']
        const buttonElement = document.getElementById

    }

    return (
        <div className="container" id="container">
        {/* //     <div className="form__action">
        //         <div className="action__element ">
        //             <button id="action__element--search" className="action__button action__button--search action__button--active ">Search</button>
        //         </div>
        //         <div className="action__element">
        //             <button id="action__element--delete" className="action__button action__button--search">Delete</button>
        //         </div>
        //     </div> */}
            <form className='form ' id="actionForm" action="">
                <div className="form__fields ">
                    <div className="form__group">
                        <label htmlFor="phoneNumber" className="form__label murecho--normal">電話番号</label>
                        <input
                            className={`form__input--text ${focusedField === 'phoneNumber' ? 'focused' : ''}`}
                            type="text"
                            id="phoneNumber"
                            name="denwabango"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="form__group">
                        <label htmlFor="chokusosaki" className="form__label murecho--normal">直送先</label>
                        <input
                            className={`form__input--text ${focusedField === 'chokusosaki' ? 'focused' : ''}`}
                            type="text"
                            id="chokusosaki"
                            name="chokusosaki"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="form__group">
                        <label htmlFor="tokuisakicode" className="form__label murecho--normal">得意先コード加工</label>
                        <input
                            className={`form__input--text ${focusedField === 'tokuisakicode' ? 'focused' : ''}`}
                            type="text"
                            id="tokuisakicode"
                            name="tokuisakicode"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="form__group">
                        <label htmlFor="kenmeibiko" className="form__label murecho--normal">件名備考1</label>
                        <input
                            className={`form__input--text ${focusedField === 'kenmeibiko' ? 'focused' : ''}`}
                            type="text"
                            id="kenmeibiko"
                            name="kenmeibiko"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div className="form__movable">
                    <div className="form__buttons-group">
                        <button className="form__buttons murecho--semi-bold" type="button" id="searchBtn"><i className="fa-solid fa-magnifying-glass"></i>検索</button>
                        <button className="form__buttons murecho--semi-bold" type="button" id="clearBtn"><i className="fa-solid fa-eraser"></i>クリア</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
