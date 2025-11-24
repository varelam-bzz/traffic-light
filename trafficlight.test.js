//import module traffic light
const app = require("./trafficlight");

//test suite
describe('test suite traffic light', () => {
    //case red light
    it('case red light', () => {
        expect(app.trafficLight("red"))
            .toBe("DON'T WALK!");
    });

    //case orange light
    it('case orange light', () => {
        expect(app.trafficLight("orange"))
            .toBe("ATTENTION!");
    });

    //case green light
    it('case green light', () => {
        expect(app.trafficLight("green"))
            .toBe("WALK!");
    });

    //case undefined (no argument)
    it('case undefined - out of order', () => {
        expect(app.trafficLight(undefined))
            .toBe("OUT OF ORDER");
    });

    //case no argument provided
    it('case no argument provided', () => {
        expect(app.trafficLight())
            .toBe("OUT OF ORDER");
    });

    //case invalid color
    it('case invalid color returns undefined', () => {
        expect(app.trafficLight("blue"))
            .toBeUndefined();
    });

    //case empty string
    it('case empty string returns undefined', () => {
        expect(app.trafficLight(""))
            .toBeUndefined();
    });

    //case null
    it('case null returns undefined', () => {
        expect(app.trafficLight(null))
            .toBeUndefined();
    });
});
