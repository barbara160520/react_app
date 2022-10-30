import {photoReducer,initialState} from '../redux/reducers/photosReducer/photoReducer'
import * as t from '../redux/storge/actions'

describe('Photo Reducer',() => {

    it('GET_PHOTOS_LOADING', () => {
        const action = {
          type: t.loadingPhotos('getPhotos'),
        }
    
        expect(photoReducer(initialState, action)).toEqual({
          ...initialState,
          error: null,
          loading: false,
          photos: [],
        })
      })

})