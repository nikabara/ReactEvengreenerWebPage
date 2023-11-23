import '../Components/Dropdown.css';
import { useState } from 'react';

const DropdownRow2 = (props) => {
    return (
        <div className='div-row-2'>
            <ul className='tab-options-ul-1 tab-ul'>
                <li className="tab-options-li tpl1"><a href="">{props.listtext_n1}</a></li>
                <li className="tab-options-li tpl2"><a href="">{props.listtext_n2}</a></li>
                <li className="tab-options-li tpl3"><a href="">{props.listtext_n3}</a></li>
                <li className="tab-options-li tpl4"><a href="">{props.listtext_n4}</a></li>
                <li className="tab-options-li tpl5"><a href="">{props.listtext_n5}</a></li>
                <li className="tab-options-li tpl6"><a href="">{props.listtext_n6}</a></li>
                <li className="tab-options-li tpl7"><a href="">{props.listtext_n7}</a></li>
                <li className="tab-options-li tpl8"><a href="">{props.listtext_n8}</a></li>
                <li className="tab-options-li tpl9"><a href="">{props.listtext_n9}</a></li>
                <li className="tab-options-li tpl10"><a href="">{props.listtext_n10}</a></li>
                <li className="tab-options-li tpl11"><a href="">{props.listtext_n11}</a></li>
            </ul>
            <ul className='tab-options-ul-2 tab-ul'>
                <li className="tab-options-li tpl12"><a href={`${props.link12}`}>{props.listtext_n12}</a></li>
                <li className="tab-options-li tpl13"><a href="">{props.listtext_n13}</a></li>
                <li className="tab-options-li tpl14"><a href="">{props.listtext_n14}</a></li>
                <li className="tab-options-li tpl15"><a href="">{props.listtext_n15}</a></li>
                <li className="tab-options-li tpl16"><a href="">{props.listtext_n16}</a></li>
                <li className="tab-options-li tpl17"><a href="">{props.listtext_n17}</a></li>
                <li className="tab-options-li tpl18"><a href="">{props.listtext_n18}</a></li>
                <li className="tab-options-li tpl19"><a href="">{props.listtext_n19}</a></li>
                <li className="tab-options-li tpl20"><a href="">{props.listtext_n20}</a></li>
                <li className="tab-options-li tpl21"><a href="">{props.listtext_n21}</a></li>
                <li className="tab-options-li tpl22"><a href="">{props.listtext_n22}</a></li>
            </ul>
        </div>
    )
};

const DropdownRow3 = (props) => {
    return (
        <div className='div-row-3' style={{backgroundImage: `url(${props.backgroundImageUrl})`}}>
            <p className='image-paragraph'>{props.paragraphText}</p>
            <h2 className='image-title'>{props.titleText}</h2>
            <button className='row-3-btn'>{props.btnTitle}</button>
        </div>
    );
};

export const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            <div className='title-div'>
                <h2 className='dropdown-title'>{props.tabTitle}</h2>
            </div>
            <DropdownRow2 
                listtext_n1={props.listtext_n1} listtext_n2={props.listtext_n2} listtext_n3={props.listtext_n3} listtext_n4={props.listtext_n4} 
                listtext_n5={props.listtext_n5} listtext_n6={props.listtext_n6} listtext_n7={props.listtext_n7} listtext_n8={props.listtext_n8} 
                listtext_n9={props.listtext_n9} listtext_n10={props.listtext_n10} listtext_n11={props.listtext_n11} listtext_n12={props.listtext_n12} 
                listtext_n13={props.listtext_n13} listtext_n14={props.listtext_n14} listtext_n15={props.listtext_n15} listtext_n16={props.listtext_n16}
                listtext_n17={props.listtext_n17} listtext_n18={props.listtext_n18} listtext_n19={props.listtext_n19} listtext_n20={props.listtext_n20} 
                listtext_n21={props.listtext_n21} listtext_n22={props.listtext_n22} link12={props.link12}>
            </DropdownRow2>
            <DropdownRow3 backgroundImageUrl={props.backgroundImageUrl} paragraphText={props.paragraphText} titleText={props.titleText} btnTitle={props.btnTitle}/>
        </div>
    );
};