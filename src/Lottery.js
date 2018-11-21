import React from 'react';
import './Lottery.css';

export default class Lottery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRolling: false,
            index: (props && props.index) || 0,
            count: 8,
            timer: 0,
            speed: (props && props.speed) || 100,
            times: (props && props.times) || 0,
            cycle: (props && props.cycle) || 24,
            prize: (props && props.prize) || 2,
        };
    }

    start() {
        if (this.state.isForbind) {
            alert('你的抽奖次数已经用完');
            return;
        }
        this.setState(
            {
                isRolling: true,
            },
            () => {
                this.roll();
            }
        );
    }

    roll() {
        this.state.times += 1;
        this.hightLight();
        let lottery = this.state;
        if (lottery.times > lottery.cycle && lottery.prize == lottery.index) {
            clearTimeout(lottery.timer);
            lottery.prize = -1;
            lottery.times = 0;
            lottery.isForbind = true;
            this.setState({ isRolling: false });
        } else {
            if (lottery.times > lottery.cycle) {
                lottery.speed += 50;
            }

            //console.log(lottery.times+'^^^^^^'+lottery.speed+'^^^^^^^'+lottery.prize);
            lottery.timer = setTimeout(this.roll.bind(this), lottery.speed);
        }
        return false;
    }

    hightLight() {
        if (this.state.index >= this.state.count - 1) {
            this.state.index = -1;
        }

        this.setState({
            index: ++this.state.index,
        });
    }

    getClazz(order) {
        if (order == this.state.index)
            return `cell active`;
        return `cell `;
    }

    render() {
        const { imgs } = this.props;
        return (
            <div className="lottery-box">
                <section class="row" >
                    <div className={this.getClazz(0)}><img src={imgs[0]} /></div>  <div className={this.getClazz(1)}><img src={imgs[1]} /></div> <div className={this.getClazz(2)}>1</div>
                </section>
                <section class="row row2" >
                    <div className={this.getClazz(7)}>8</div>  <div class="cell">{ this.state.isRolling? "开始":<span href="#" onClick={this.start.bind(this)}>
                                    开始
                                </span>}</div> <div className={this.getClazz(3)}>4</div>
                </section>
               <section class="row" >
                    <div className={this.getClazz(6)}>7</div>  <div className={this.getClazz(5)}>6</div> <div className={this.getClazz(4)}>5</div>
                </section>
            </div>
        );
    }
}

{
    /* <table>
                    <tbody>
                        <tr>
                            <td className={this.getClazz(0)} >
                                <img src={imgs[0]} />
                            </td>
                            <td className={this.getClazz(1)}>
                                <img src={imgs[1]} />
                            </td>
                            <td className={this.getClazz(2)}>3</td>
                        </tr>
                        <tr>
                            <td className={this.getClazz(7)}>8</td>
                            <td>
                                { this.state.isRolling? "开始":<span href="#" onClick={this.start.bind(this)}>
                                    开始
                                </span>}

                            </td>
                            <td className={this.getClazz(3)}>4</td>
                        </tr>
                        <tr>
                            <td className={this.getClazz(6)}>7</td>
                            <td className={this.getClazz(5)}>6</td>
                            <td className={this.getClazz(4)}>5</td>
                        </tr>
                    </tbody>
                </table> */
}
