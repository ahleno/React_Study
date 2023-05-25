import React, { useState, Fragment, useRef } from "react";

function Search() {
    const nameInput = useRef([]);
    
    const [inputs, setInputs] = useState({
      searchTitle: "",
      searchWriter: "",
    });
  
    const onChange = (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    };

    const onClick = (e) => {
        setInputs({
            searchTitle: "",
            searchWriter: ""
        });
        onReset();
    };

    const onReset = () => {
        nameInput.current[0].focus();
        nameInput.current[0].value = "";
        nameInput.current[1].value = "";
    }

    return (
      <Fragment>
        <div className="search">
          <div>
            <input ref={ (el)=>(nameInput.current[0] = el) } value={inputs.searchTitle} name="searchTitle" placeholder="글제목" onChange={onChange} />
            <input ref={ (el)=>(nameInput.current[1] = el) } value={inputs.searchWriter} name="searchWriter" placeholder="글쓴이" onChange={onChange} />
            <button onClick={onClick}>찾기</button>
          </div>
          <p id="search_para">
            검색 문자열: {inputs.searchTitle}+{inputs.searchWriter}
          </p>
        </div>
      </Fragment>
    );
  }
  export default Search;
  