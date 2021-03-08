(function () {

    class Room {
        constructor(amount, level, roomId) {
            this.amount = amount; // max people in the room
            this.level = level; // floor number
            this.roomId = roomId;
            this.isFree = true;
        }

        isSizeMatch(num) {
            if (num <= this.amount) {
                this.isFree = false;
                return true;
            }
            return false;
        }

        print() {
            console.log(`Room id : ${this.roomId}, max people in the room is : ${this.amount}, the floor number is : ${this.level}, is the room free : ${this.isFree}`);
        }
    }

    // let room1 = new Room(4, 100, 112);
    // room1.print();
    // console.log(room1.isSizeMatch(3));
    // room1.print();

    class Hotel {
        constructor(room) {
            this.rooms = [room];
        }

        addRoom(newRoom) {
            for (let i = 0; i < this.rooms.length; i++) {
                if (this.rooms[i].roomId === newRoom.roomId) {
                    return false;
                }
            }
            this.rooms.push(newRoom);
            return true;
        }

        removeRoom(roomId) {
            for (let i = 0; i < this.rooms.length; i++) {
                if (this.rooms[i].roomId === roomId) {
                    if (this.rooms[i].isFree === true) {
                        const index = this.rooms.indexOf(this.rooms[i]);
                        this.rooms.splice(index, 1);
                        return true;
                    }
                }
            }

            return false;
        }

        checkFreeRooms(amount) {
            let amountOfAvaiableRooms = 0;
            for (let i = 0; i < this.rooms.length; i++) {
                if (this.rooms[i].amount <= amount) {
                    amountOfAvaiableRooms++;
                }
            }
            return amountOfAvaiableRooms;
        }

        checkIn(roomId, amount) {
            for (let i = 0; i < this.rooms.length; i++) {
                if (this.rooms[i].roomId === roomId) {
                    if (amount <= this.rooms[i].amount) {
                        this.rooms[i].isFree = false;
                        return true;
                    }
                }
            }
            return false;
        }

        HighRoomFree() {
            let availableRooms = this.rooms.filter(room => room.isFree === true);
            let sortedRoomsByFloors = availableRooms.sort((a, b) => b.level - a.level);
            let filteredHighRooms = sortedRoomsByFloors.filter(room => room.level === sortedRoomsByFloors[0].level);
            return filteredHighRooms.sort((a,b) => b.amount - a.amount);
        }

        getAllRooms(isFree) {
            return this.rooms.filter(room => room.isFree === isFree).sort((a,b) => a.roomId - b.roomId);
        }
    }

    let room1 = new Room(4, 100, 112);
    let hotel = new Hotel(room1);

    let room2 = new Room(4, 100, 116);
    hotel.addRoom(new Room(4, 102, 113));
    hotel.addRoom(new Room(4, 101, 114));
    hotel.addRoom(new Room(7, 102, 115));

    console.log(hotel.addRoom(room2));

    console.log(hotel);
    console.log(hotel.removeRoom(114));
    console.log(hotel);

    console.log(hotel.checkFreeRooms(4));

    console.log('checkIn', hotel.checkIn(125, 5));
    console.log('----------');
    console.log(hotel.HighRoomFree());

    console.log('----------');
    console.log(hotel.getAllRooms(true));
})();