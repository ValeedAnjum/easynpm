import React from 'react';

const Commands = ({commands,favourties,idOfList,DeleteList}) => {
    const copyCommand = (event) => {
        // console.log(event.target.parentElement.parentElement.nextSibling);
        // var from = document.getElementById("commandText");
        event.preventDefault();
        const RefHolder = event.target;
        var from = RefHolder.parentElement.nextSibling;
        var range = document.createRange();
        window.getSelection().removeAllRanges();
        range.selectNode(from);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        RefHolder.innerText = "Copied";
        setTimeout(() => {
            RefHolder.innerText = "copy";
        },500)
    }
    return (
        <React.Fragment>
            <div className="commands">
                <div className="btnCon">
                    <button color="primary" onClick={event => copyCommand(event)}>Copy</button>
                    
                    {
                        favourties && <i className="fa fa-times DeleteIcon" 
                        onClick={() => DeleteList(idOfList)}
                        aria-hidden="true"></i>
                    }

                </div>
                <p id="commandText">
                    npm install
                    {
                        commands.map((val,index) => {
                            return ` ${val} `
                        })
                    }
                </p>
            </div>
        </React.Fragment>
    );
};

export default Commands;