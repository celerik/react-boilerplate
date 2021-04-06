import React from 'react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

function Boom(){
    return(
        <div>
            <Button style = {{ left: 1210.55, top: 500.87, position: "absolute", background: "white", height: 24, width: 24, padding: 24}}>    
                <Icon>
                    add
                </Icon>
            </Button>
            <Button style = {{ left: 1210.55, top: 550.87, position: "absolute", background: "white", height: 24, width: 24, padding: 24}}>    
                <Icon>
                    remove
                </Icon>
            </Button>
        </div>
    );
}

export default Boom;