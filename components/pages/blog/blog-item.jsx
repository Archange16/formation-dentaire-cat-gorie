import Link from 'next/link';
import React from 'react';

const BlogItem = ({currentBlogItems}) => {
    return (
        <>
            {currentBlogItems?.map((data, id) => (
				<div className="col-xl-4 col-lg-6" key={id}>
					<div className="blog__two-single-blog">
						<div className="blog__two-single-blog-img">
							<div className="blog__two-single-blog-date">
								<span className="date">{data.date}</span>
								<span className="month">{data.month}</span>
							</div>
							<Link href={`/blog/${data.id}`}><img src={data.image.src} alt="blog" /></Link>
						</div>
						<div className="blog__two-single-blog-content">
							<div className="blog__two-single-blog-content-top">
								<span><i className="far fa-user"></i>Administrateur</span>
								<span><i className="far fa-comment-dots"></i>Comments ({data.comment})</span>
							</div>
							<Link href={`/blog/${data.id}`} className="blog__two-single-blog-content-title">{data.title}</Link>
							<Link className="btn-one" href={`/blog/${data.id}`}>En savoir plus<i className="fas fa-chevron-right"></i></Link> 
						</div>
					</div>
				</div>
            ))}            
        </>
    );
};

export default BlogItem;