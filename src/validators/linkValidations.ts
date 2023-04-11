import * as yup from "yup";

export const linkSchema = yup.object().shape({
    url: yup.string().url() .matches(
        /^https:\/\/www\.youtube\.com\//,
        'A URL deve começar com "https://www.youtube.com/".'
      ).required()
})

