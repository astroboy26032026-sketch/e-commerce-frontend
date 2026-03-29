import React, { CSSProperties } from 'react';
import BlogSidebar from '../blog-sidebar';
import { Comments, Date, UserTwo } from '@/components/svg';
import BlogReplyForm from '@/components/form/blog-reply-form';
import BlogDetailsComments from './blog-details-comments';
import Image from 'next/image';
import { IBlogType } from '@/types/blog-type';

const imgStyle:CSSProperties = {width: '100%', height: 'auto'};

// type 
type IProps = {
    blog: IBlogType
}
export default function BlogDetailsArea({blog}:IProps) {
  return (
    <section className="tp-postbox-details-area pb-120 pt-95">
        <div className="container">
            <div className="row">
                <div className="col-xl-9">
                    <div className="tp-postbox-details-top">
                    <div className="tp-postbox-details-category">
                        <span>
                            <a href="#">Beauty,</a>
                        </span>
                        <span>
                            <a href="#">Trends</a>
                        </span>
                    </div>
                    <h3 className="tp-postbox-details-title">{blog.title}</h3>
                    <div className="tp-postbox-details-meta mb-50">
                        <span data-meta="author">
                            <UserTwo/>
                            By <a href="#">TraoStudio</a>
                        </span>
                        <span>
                            <Date/>
                            30 October, 2023
                        </span>
                        <span>
                            <Comments/>
                            <a href="#">Comments (2)</a>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="tp-postbox-details-thumb">
                      <Image src="/assets/images/blog/details/blog-big-1.jpg" alt="blog-img" width={1200} height={600} style={imgStyle}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-9 col-lg-8">
                    <div className="tp-postbox-details-main-wrapper">
                    <div className="tp-postbox-details-content">
                        <p className="tp-dropcap">sales process is critically important to the success of your reps and your business. If you have never seen a really skilled salesperson work, it seems almost effortless. They ask great questions, craftt perfect proposal, answer questions, address concerns and seamlessly seal the Underneath the surface of all of that, the salesperson has probably dedicated hours honing their craft and ensuring the process moves smoothly.</p>

                        <p>One of the challenges that often surfaces when  working with a remote sales team is a lack of transparency over what is happening, and where in the process things are taking place. We’re going to peel back the curtain and show you how to create the best sales.</p>

                        <h4 className="tp-postbox-details-heading">Breaking Up With Fast Fashion Has Been Easier</h4>
                        <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium, sem. Nulla onsequat massa quis enim. donec pede justo fringilla vel aliquet.</p>

                        <div className="tp-postbox-details-desc-thumb text-center">
                            <Image src="/assets/images/blog/details/blog-details-sm-1.jpg" alt="blog-sm-mg" width={636} height={393} style={imgStyle}/>
                            <span className="tp-postbox-details-desc-thumb-caption">Gucci’s Women’s Cruise Collection 2023 Lookbook Has Arrived</span>
                        </div>
                        <p>“We’re so glad we’ll be working with you to get your new marketing strategy up and running. I have attached the details of your package. Next you’ll get an email from Jen to schedule your kick-off meeting and be assigned your account rep. During your kick-off meeting, we will introduce your project team, let you know what access we need to start.” </p>

                        <div className="tp-postbox-details-quote">
                            <blockquote>
                                <div className="tp-postbox-details-quote-shape">
                                <Image className="tp-postbox-details-quote-shape-1" src="/assets/images/blog/details/shape/line.png" alt="line-img" width={792} height={200} style={imgStyle}/>
                                <Image className="tp-postbox-details-quote-shape-2" src="/assets/images/blog/details/shape/quote.png" alt="quote-img" width={100} height={74}/>
                                </div>
                                <p>There is a way out of every box, a solution to every puzzle its just a matter of finding it.</p>
                                <cite>Shahnewaz Sakil</cite>
                            </blockquote>
                        </div>

                        <h4 className="tp-postbox-details-heading">Exploring the English Countryside</h4>
                        <p>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem,nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. Nulla onsequat massa quis enim.</p>

                        <div className="tp-postbox-details-list">
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>At vero eos et accusamus et iusto odio.</li>
                                <li>Excepteur sint occaecat cupidatat non proident.</li>
                            </ul>
                        </div>
                        <p>Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.</p>

                        <div className="tp-postbox-details-share-wrapper">
                            <div className="row">
                                <div className="col-xl-8 col-lg-6">
                                <div className="tp-postbox-details-tags tagcloud">
                                    <span>Tags:</span>
                                    <a href="#">Lifesttyle</a>
                                    <a href="#">Awesome</a>
                                    <a href="#">Winter</a>
                                    <a href="#">Sunglasses</a>
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                <div className="tp-postbox-details-share text-md-end">
                                    <span>Share:</span>
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-postbox-details-author d-sm-flex align-items-start" data-bg-color="#F4F7F9">
                            <div className="tp-postbox-details-author-thumb">
                                <a href="#">
                                 <Image src="/assets/images/users/user-1.jpg" alt="user" width={90} height={90}/>
                                </a>
                            </div>
                            <div className="tp-postbox-details-author-content">
                                <span>Written by</span>
                                <h5 className="tp-postbox-details-author-title">
                                <a href="#">Theodore Handle</a>
                                </h5>
                                <p>By defining and following internal and external processes, your team will have clarity on resources to attract and retain customers for your business.</p>

                                <div className="tp-postbox-details-author-social">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="tp-postbox-details-comment-wrapper">
                            <h3 className="tp-postbox-details-comment-title">Comments (2)</h3>

                            <div className="tp-postbox-details-comment-inner">
                            {/* comment start */}
                            <BlogDetailsComments/>
                            {/* comment end */}
                            </div>
                        </div>

                        <div className="tp-postbox-details-form">
                            <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>

                            <div className="tp-postbox-details-form-wrapper">
                                {/* form start */}
                                <BlogReplyForm/>
                                {/* form end */}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                    <BlogSidebar/>
                </div>
            </div>
        </div>
    </section>
  )
}
