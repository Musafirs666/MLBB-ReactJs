import React from "react";
import * as yup from "yup";

export const HeroSchema = yup.object().shape({
  heroName: yup.string().required("Nama Hero tidak Boleh Kosong"),
  heroRoles: yup.string().required("Role Hero Tidak Boleh Kosong"),
  heroBiography: yup.string().required("Bioghraphy Hero Tidak Boleh Kosong"),
  heroImage: yup
    .mixed()
    .test("fileRequired", "File harus diunggah!", function (value) {
      return value && value[0];
    }),
  skillName: yup
    .array()
    .of(
      yup.string().required("Nama Skill Hero tidak Boleh Kosong"),
      function (value) {
        return value !== null && value.length > 0;
      }
    ),
  skillDescription: yup
    .array()
    .of(
      yup.string().required("Nama Skill Hero tidak Boleh Kosong"),
      function (value) {
        return value !== null && value.length > 0;
      }
    ),

  skillImage: yup.array().of(
    yup.mixed().test("fileRequired", "File harus diunggah!", function (value) {
      return value !== null && value.length > 0;
    })
  ),
  skillIcon: yup.array().of(
    yup.mixed().test("fileRequired", "File harus diunggah!", function (value) {
      return value !== null && value.length > 0;
    })
  )
});
