import React from 'react';

class Numbers extends React.Component {
    render() {
        function ListItem(props){
            return <li>{props.value}</li>
        }
        const {numbers} = this.props;
        const listItems = numbers.map((number, key) =>
            <ListItem key={number.toString()}  value={number} />
        );
        return (
            <div className="container">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default Numbers