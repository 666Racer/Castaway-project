import { TReviewProps } from "./type"
import starIcon from '../../../assets/images/icons/star-filled.svg';

import style from './styles.module.css';

const TOTAL = 5;

const STARS = [...Array(TOTAL).keys()];


export const Review = ({
    rating,
    text,
    author
}: TReviewProps) => {
    return (
        <article className={style['review-card']}>
            <div className={style['review-card__rating']}>
                {STARS.map((_, index) => {
                    if (index >= rating) {
                        return null;
                    }
                    return (
                        <img src={starIcon} key={index} alt="star-rating" />
                    )
                })}
            </div>
            <div className={style['review-card__text']}>
                {text}
            </div>
            <div className={style['review-card__author']}>
                {author}
            </div>
      </article>
    )
}