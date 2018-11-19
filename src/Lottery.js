import React from 'react';
import './Lottery.css';

export default class Lottery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRolling:false,
            index: (props && props.index) || 0,
            count: 8,
            timer: 0,
            speed: (props && props.speed) || 100,
            times: (props && props.times) || 0,
            cycle: (props && props.cycle) || 24,
            prize: (props && props.prize) || 5,
        };
    }

    start() {
        this.setState({
            isRolling:true,
        },()=>{
            this.roll();
        })

    }

    roll() {
        this.state.times += 1;
        this.hightLight();
        let lottery = this.state;
        if (
            lottery.times > lottery.cycle + 10 &&
            lottery.prize == lottery.index
        ) {
            clearTimeout(lottery.timer);
            lottery.prize = -1;
            lottery.times = 0;
            this.setState({isRolling:false})
        } else {
              if (
                    lottery.times > lottery.cycle

                ) {
                    lottery.speed += 50;
                }

            //console.log(lottery.times+'^^^^^^'+lottery.speed+'^^^^^^^'+lottery.prize);
            lottery.timer = setTimeout(this.roll.bind(this), lottery.speed);
        }
        return false;
    }

    hightLight() {

        if(this.state.index >= (this.state.count-1)){
            this.state.index =-1;
        }

        this.setState({
            index: ++this.state.index,
        });
    }

    getClazz(order) {
        if (order == this.state.index)
            return `lottery-unit lottery-unit-${order} active`;
        return `lottery-unit lottery-unit-${order}`;
    }

    render() {
        return (
            <div className="lottery-box">
                <table>
                    <tbody>
                        <tr>
                            <td className={this.getClazz(0)} >
                                1
                            </td>
                            <td className={this.getClazz(1)}>
                                2
                            </td>
                            <td className={this.getClazz(2)}>3</td>
                        </tr>
                        <tr>
                            <td className={this.getClazz(7)}>8</td>
                            <td>
                                { this.state.isRolling? "开始":<a href="#" onClick={this.start.bind(this)}>
                                    开始
                                </a>}

                            </td>
                            <td className={this.getClazz(3)}>4</td>
                        </tr>
                        <tr>
                            <td className={this.getClazz(6)}>7</td>
                            <td className={this.getClazz(5)}>6</td>
                            <td className={this.getClazz(4)}>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
