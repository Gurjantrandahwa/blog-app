import React from "react";
import "./CreateBlog.css"
import {Link} from "react-router-dom";
import {ArrowBack} from "@mui/icons-material";
import db from "../../Common/firebase";
import {Formik} from "formik";
import * as Yup from 'yup';

import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

function CreateBlog() {
    return <div>
        <div className={"back-link"}>
            <Link to={"/"}> <ArrowBack/><span className={"back-button"}>Back</span></Link>
            <h2>Let us know what's on your mind</h2>
        </div>

        <div className={"create-blog-wrapper"}>

            <Formik
                initialValues={{
                    title: '',
                    coverImage: '',
                    type: '',
                    authorName: '',
                    authorImage: '',
                    description: ''
                }}

                onSubmit={(values, formikHelpers) => {
                    formikHelpers.setSubmitting(false)
                    db.collection('Blogs').add(values);
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .required("Title is Required"),
                    coverImage: Yup.string()
                        .required("CoverImage is Required"),
                    type: Yup.string()
                        .required("Type is Required"),
                    authorName: Yup.string()
                        .required("AuthorName is Required"),

                    authorImage: Yup.string()
                        .required("AuthorImage is Required"),
                    description: Yup.string()
                        .required("Description is Required"),
                })}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      touched,
                      errors,
                      handleBlur
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={"form-wrapper"}>
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel id="blog-type-select-label">Blog Type</InputLabel>
                                    <Select
                                        labelId="blog-type-select-label"
                                        name={"type"}
                                        value={values.type}
                                        label="Blog Type"
                                        onChange={handleChange}
                                        className={errors.type && touched.type && "error"}
                                    >

                                        <MenuItem value={"Tech"}>Tech</MenuItem>
                                        <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                                        <MenuItem value={"Community"}>Community</MenuItem>
                                    </Select>
                                </FormControl>

                                {errors.type && touched.type && (
                                    <div className="input-feedback">{errors.type}</div>
                                )}
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    name={"title"}
                                    value={values.title}
                                    onChange={handleChange}
                                    className={errors.title && touched.title && "error"}
                                />
                                {errors.title && touched.title && (
                                    <div className="input-feedback">{errors.title}</div>
                                )}
                            </div>
                            <div>
                                <TextField fullWidth
                                           onBlur={handleBlur}
                                           type={"url"}
                                           label={"Cover Image"}
                                           name={"coverImage"}
                                           variant={"outlined"}
                                           value={values.coverImage}
                                           onChange={handleChange}
                                           className={errors.coverImage && touched.coverImage && "error"}/>
                                {errors.coverImage && touched.coverImage && (
                                    <div className="input-feedback">{errors.coverImage}</div>
                                )}
                            </div>

                            <div>
                                <TextField variant={"outlined"}
                                           label={"Author Name"}
                                           fullWidth
                                           onBlur={handleBlur}
                                           name={"authorName"}
                                           value={values.authorName}
                                           onChange={handleChange}
                                           className={errors.authorName && touched.authorName && "error"}/>
                                {errors.authorName && touched.authorName && (
                                    <div className="input-feedback">{errors.authorName}</div>
                                )}
                            </div>
                            <div>
                                <TextField variant={"outlined"}
                                           label={"Author Image"}
                                           fullWidth
                                           onBlur={handleBlur}
                                           name={"authorImage"}
                                           value={values.authorImage}
                                           onChange={handleChange}
                                           className={errors.authorImage && touched.authorImage && "error"}/>
                                {errors.authorImage && touched.authorImage && (
                                    <div className="input-feedback">{errors.authorImage}</div>
                                )}
                            </div>

                            <div>

                                <TextField variant={"outlined"}
                                           label={"Blog"}
                                           fullWidth
                                           onBlur={handleBlur}
                                           multiline
                                           rows={4}
                                           name={"description"}
                                           value={values.description}
                                           onChange={handleChange}
                                           className={errors.description && touched.description && "error"}/>
                                {errors.description && touched.description && (
                                    <div className="input-feedback">{errors.description}</div>
                                )}
                            </div>
                        </div>
                        <Button
                            variant={"contained"}
                            disabled={isSubmitting}
                            type={"submit"}>Add Blog
                        </Button>
                    </form>
                )}
            </Formik>
        </div>
    </div>
}

export default CreateBlog