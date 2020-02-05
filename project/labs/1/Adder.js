class Adder {

    constructor(props) {
        this.props = props;
    }

    sum() {
           return this.props.a + this.props.b;
    }
    render() {
        var result, sum, string;

        sum = this.sum();

        if (sum) {
            string = 'the sum of ' + this.props.a + ' and ' + this.props.b + 'is ' +sum;

            result = '<p>' + string + '</p>';

        } else {
            result = undefined;
        }

        return result;
        }
    }
    module.exports = Adder