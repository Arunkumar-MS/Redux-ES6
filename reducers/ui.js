import moment from 'moment';




export default function ui(state = getInitialState(), action) {
    switch (action.type) {
        case 'nextSlot':
            return {...state,
                showSlot: action.value
            };
        default:
            return state
    }
}

function getAppointment(startDateIndex) {
    const day = moment.utc().add(startDateIndex, "day").format('ddd, MMM');
    const date = moment.utc().format('DD');
    const avalible = getRandomInt();
    const hoursSlot = getHourSlot(2);
    return {
        "day": day,
        "date": date,
        "avalible": avalible,
        "slot": hoursSlot

    }
}

function getHourSlot(interval) {
    let slot = [];
    let counter = 2;
    for (let i = 0; i < 8; i++) {
        slot.push({
            "slotRange": moment.utc().add(counter, "hours").format('HH:mm A')
        });
        counter += 2;
    }
    return slot;
}

function getInitialState() {
    let appointmentdays = [];
    for (let i = 0; i < 5; i++) {
        appointmentdays.push(getAppointment(i));
    }
    let initialState = {
        "showSlot": 0,
        "currentDays": 5,
        "appointmentdays": appointmentdays
      };
      return initialState;
    }


function getRandomInt(min = 0, max = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
