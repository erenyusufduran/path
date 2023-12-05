import { ReservationsDataAccess } from '../../../app/server_app/data/ReservationsDataAccess';
import { DataBase } from '../../../app/server_app/data/DataBase';
import * as IdGenerator from '../../../app/server_app/data/IdGenerator';
import { Reservation } from '../../../app/server_app/model/ReservationModel';

const mockInsert = jest.fn();
const mockGetBy = jest.fn();
const mockUpdate = jest.fn();
const mockDelete = jest.fn();
const mockGetAllElements = jest.fn();

jest.mock('../../../app/server_app/data/DataBase', () => {
  return {
    DataBase: jest.fn().mockImplementation(() => {
      return {
        insert: mockInsert,
        getBy: mockGetBy,
        update: mockUpdate,
        delete: mockDelete,
        getAllElements: mockGetAllElements,
      };
    }),
  };
});

describe('ReservationsDataAccess test suite', () => {
  let sut: ReservationsDataAccess;

  const someId = '1234';

  const someReservation: Reservation = {
    endDate: 'someEndDate',
    startDate: 'someStartDate',
    id: '',
    room: 'someRoom',
    user: 'someUser',
  };

  beforeEach(() => {
    sut = new ReservationsDataAccess();
    expect(DataBase).toHaveBeenCalledTimes(1);
    jest.spyOn(IdGenerator, 'generateRandomId').mockReturnValueOnce(someId);
  });

  afterEach(() => {
    jest.clearAllMocks();
    someReservation.id = '';
  });

  it('Should return the id of newly created reservation', async () => {
    mockInsert.mockResolvedValueOnce(someId);
    const actual = await sut.createReservation(someReservation);
    expect(actual).toBe(someId);
    expect(mockInsert).toHaveBeenCalledWith(someReservation);
  });
});
