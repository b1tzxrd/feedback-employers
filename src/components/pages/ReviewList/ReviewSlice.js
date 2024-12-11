import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../config/baseUrl';



const reviewAdapter = createEntityAdapter()

const initialState = reviewAdapter.getInitialState({ reviewLoadingStatus: 'idle' })

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const res = await axios.get(BASE_URL)

        return res.data
    }
)

const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        createReview: (state, action) => {
            reviewAdapter.setOne(state, action.payload)
        },
        updateReviewStatus: (state, action) => {
            const { id, status } = action.payload;
            reviewAdapter.updateOne(state, {
                id,
                changes: { status },
            });
        },
        editReview: (state, action) => {
            const {id, newText} = action.payload;
            reviewAdapter.updateOne(state, {
                id,
                changes: {review: newText}
            })
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchReviews.pending, state => { state.reviewLoadingStatus = 'loading' }),
            build.addCase(fetchReviews.fulfilled, (state, action) => {
                state.reviewLoadingStatus = 'idle'
                reviewAdapter.setAll(state, action.payload);
            }),
            build.addCase(fetchReviews.rejected, state => { state.reviewLoadingStatus = 'error' }),
            build.addDefaultCase(() => { })
    }
})

export const { createReview, updateReviewStatus, editReview } = reviewSlice.actions

export default reviewSlice.reducer;

export const { selectAll } = reviewAdapter.getSelectors(state => state.reviews)