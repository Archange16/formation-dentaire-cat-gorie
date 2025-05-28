import blogData from '@/components/data/blog-data';
import Link from 'next/link';

const Blog = () => {
    return (
        <div className="blog__one section-padding pt-lg-5">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="blog__one-title">
                            <span className="subtitle-one">Blog et actualités</span>
                            <h2>Explorer </h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    {blogData.slice(0, 3)?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6" key={id}>
                            <div className="blog__one-single-blog">
                                <div className="blog__one-single-blog-image">
                                <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="blog" /></Link>
                                </div>
                                <div className="blog__one-single-blog-date">
                                    <span className="date">{data.date}</span>
                                    <span className="month">{data.month}</span>
                                </div>
                                <div className="blog__one-single-blog-content">
                                    <div className="blog__one-single-blog-content-top">
                                        <span><i className="far fa-user"></i>par Administrateur</span>
                                        <span><i className="far fa-comment-dots"></i>Comments ({data.comment})</span>
                                    </div>
                                    <Link className="blog-heading text-center" href={`/blog/${data.id}`}>{data.title}</Link>
                                    <Link className="btn-three" href={`/blog/${data.id}`}>En savoir plus<i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;