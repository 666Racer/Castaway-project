import { REVIEWS_LIST } from "./data"
import { PageBlock } from "../../components/Layout/PageBlock";
import { Review } from "./Review";
import style from './styles.module.css';

export const Reviews = () => {
    return (
        <PageBlock className={style['reviews-list']}>
            {REVIEWS_LIST.map((review, index) => (
                <Review
                    key={index}
                    rating={review.rating}
                    author={review.author}
                    text={review.text}
                />
            ))}
        </PageBlock>
    )
}