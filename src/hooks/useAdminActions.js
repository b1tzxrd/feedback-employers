// adminActions.js
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateReviewStatus, editReview } from "../components/pages/ReviewList/ReviewSlice"
import axios from "axios";
import { BASE_URL } from "../config/baseUrl";

export const useAdminActions = () => {
    const dispatch = useDispatch();

    const handleUpdateReview = useCallback(async (id, status) => {
        try {
            await axios.patch(`${BASE_URL}/${id}`, {status})
        } catch (e) {
            console.error(e)
        }
        dispatch(updateReviewStatus({ id, status: status }));
    }, [dispatch]);


    const handleEditReview = useCallback(async (id, newText) => {
        try {
            await axios.patch(`${BASE_URL}/${id}`, { review: newText })
            dispatch(editReview({ id, newText }));
        } catch (e) {
            console.error(e)
        }
    }, [dispatch]);

    return {
        handleUpdateReview,
        handleEditReview,
    };
};
