import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Form,
  Grid,
  Container,
  Segment,
} from "semantic-ui-react";
import JobPositionsService from "../services/jobPositionsService";
import CityService from "../services/cityService";
import JobAnnouncementService from "../services/jobAnnouncementService";
import LanguageService from "../services/languageService";
import { toast } from "react-toastify";
import UserService from "../services/userService";

export default function CreateJobAnnouncment() {
  const jobPositionsService = new JobPositionsService();
  const cityService = new CityService();
  const jobAnnoucmentService = new JobAnnouncementService();
  const languageService = new LanguageService();
  const userService = new UserService();

  const [JobPositions, setJobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [employer, setEmployer] = useState({});

  const workingTimeOparation = [
    { key: 1, text: "Tam Zamanlı", value: 1 },
    { key: 2, text: "Yarı Zamanlı", value: 2 },
    { key: 3, text: "Gün Bazında", value: 3 },
    { key: 4, text: "Esnek", value: 4 },
  ];

  const workingTypeOparation = [
    { key: 1, text: "Yüz Yüze", value: 1 },
    { key: 2, text: "Çevrimiçi Online", value: 2 },
    { key: 3, text: "Hibrit", value: 3 },
  ];

  const educationLevelOption = [
    { key: 1, text: "İlkokul", value: 1 },
    { key: 2, text: "Ortaokul", value: 2 },
    { key: 3, text: "Lise", value: 3 },
    { key: 4, text: "Lisans", value: 4 },
    { key: 5, text: "Yüksek lisans", value: 5 },
    { key: 6, text: "Doktora", value: 6 },
  ];

  const drivingLicenseOption = [
    { key: 1, text: "Yok", value: 1 },
    { key: 2, text: "A", value: 2 },
    { key: 3, text: "B", value: 3 },
    { key: 4, text: "C", value: 4 },
    { key: 5, text: "D", value: 5 },
    { key: 6, text: "E", value: 6 },
    { key: 7, text: "F", value: 7 },
  ];

  const militaryOption = [
    { key: 1, text: "Yaptı", value: 1 },
    { key: 2, text: "Yapmadı", value: 2 },
    { key: 3, text: "Tecilli", value: 3 },
    { key: 4, text: "Muaf", value: 4 },
  ];

  const experienceOption = [
    { key: 1, text: "0-2 yıl arasında", value: 1 },
    { key: 2, text: "2-4 yıl arasında", value: 2 },
    { key: 3, text: "4-6 yıl arasında", value: 3 },
    { key: 4, text: "6-8 yıl arasında", value: 4 },
    { key: 5, text: "8-10 yıl arasında", value: 5 },
    { key: 6, text: "12-15 yıl arasında", value: 6 },
    { key: 7, text: "15+ yıl", value: 7 },
  ];

  const addScheme = Yup.object().shape({
    jobDescription: Yup.string().required("Açıklama Kısmı Zorunlu"),
    jobPositionId: Yup.number().required("Pozisyon Bilgisi Zorunlu"),
    educationLevelId: Yup.number().required("Eğitim Bilgisi Zorunlu"),
    workingTimeId: Yup.number().required("Çalışma Tipi Zorunlu"),
    numberOfOpenPositions: Yup.number()
      .required("Açık Pozisyon Sayısı Zorunlu")
      .min(1, "Kota 1'den Küçük Olamaz"),
    applicationDeadline: Yup.string().required("İlan Bitiş Tarihi Zorunlu"),
    minSalary: Yup.number()
      .min(0, "Maaş 0'dan Az Olamaz")
      .required("En Düşük Maaş Zorunlu"),
    maxSalary: Yup.number()
      .min(0, "Maaş 0'dan Az Olamaz")
      .required("En Yüksek Maaş Zorunlu"),
  });

  const formik = useFormik({
    initialValues: {
      jobDescription: "",
      jobPositionId: "",
      educationLevelId: "",
      workingTimeId: "",
      workingTypeId: "",
      numberOfOpenPositions: "",
      cityId: [],
      languageId: [],
      applicationDeadline: "",
      maxSalary: "",
      minSalary: "",
    },
    validationSchema: addScheme,
    onSubmit: (values) => {
      console.log(values);
      createJobAnnouncment(values);
    },
  });

  useEffect(() => {
    jobPositionsService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
    cityService.getCities().then((result) => setCities(result.data));
    languageService.getLanguages().then((result) => setLanguages(result.data));
    userService.getUser().then((result) => setEmployer(result.data.data));
  }, []);

  const jobPositionOption = JobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.jobExplanation,
    value: jobPosition.id,
  }));
  const citiesOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.cityId,
  }));

  const languagesOption = languages.map((language, index) => ({
    key: index,
    text: language.languageName,
    value: language.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    
    formik.setFieldValue(fieldName, value);
  };

  const createJobAnnouncment = (values) => {
    setSelectedCities([]);
    values.cityId.map((id) => selectedCities.push({ cityId: id }));
    console.log(selectedCities);
    const jobPositions = [{ id: values.jobPositionId }];
    const jobAnnouncment = {
      description: values.jobDescription,
      military: militaryOption[values.militaryTypeId - 1].text,
      drivingLicense: drivingLicenseOption[values.drivingLicenseId - 1].text,
      shift: workingTimeOparation[values.workingTimeId - 1].text,
      workingType: workingTypeOparation[values.workingTypeId - 1].text,
      openPositions: values.numberOfOpenPositions,
      applicationDeadline: values.applicationDeadline,
      isActive: true,
      minSalary: values.minSalary,
      maxSalary: values.maxSalary,
      experience: experienceOption[values.experienceId - 1].text,
      educationLevel: educationLevelOption[values.educationLevelId - 1].text,
      employer: {
        id: employer.id,
      },
      cities: selectedCities,
      jobPositions: jobPositions,
    };
    jobAnnoucmentService
      .addJobAnnouncment(jobAnnouncment)
      .then((result) => {
        toast.success("İlan Başarıyla Oluşturuldu")
      });
  };

  return (
    <Container className="container" style={{ marginTop: "8rem" }}>
      <Segment raised piled>
        <h1 id="playfair" style={{ margin: "2rem" }}>
          İş İlanı Oluştur
        </h1>
        <Form onSubmit={formik.handleSubmit} style={{ margin: "5rem" }}>
          <Grid>
            <Grid.Column width={8}>
              <Form.Field style={{ marginBottom: "1rem" }}>
                <label>İş Pozisyonu</label>
                <Dropdown
                  clearable
                  item
                  placeholder="İş pozisyonu"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "jobPositionId")
                  }
                  onBlur={formik.onBlur}
                  id="jobPositionId"
                  value={formik.values.jobPositionId}
                  options={jobPositionOption}
                />
                {formik.errors.jobPositionId &&
                  formik.touched.jobPositionId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.jobPositionId}
                    </div>
                  )}
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Field>
                <label>Yabancı Dil</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Yabancı Dil"
                  search
                  multiple
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "languageId")
                  }
                  onBlur={formik.onBlur}
                  id="languageId"
                  value={formik.values.languageId}
                  options={languagesOption}
                />
                {formik.errors.languageId && formik.touched.languageId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.languageId}
                  </div>
                )}
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column width={8}>
              <Form.Field>
                <label>Tecübe Yılı</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Tecübe Yılı"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "experienceId")
                  }
                  onBlur={formik.onBlur}
                  id="experienceId"
                  value={formik.values.experienceId}
                  options={experienceOption}
                />
                {formik.errors.experienceId && formik.touched.experienceId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.experienceId}
                  </div>
                )}
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Field>
                <label>Şehir</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Şehir"
                  search
                  multiple
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "cityId")
                  }
                  onBlur={formik.onBlur}
                  id="cityId"
                  value={formik.values.cityId}
                  options={citiesOption}
                />
                {formik.errors.cityId && formik.touched.cityId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.cityId}
                  </div>
                )}
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Grid stackable>
            <Grid.Column width={4}>
              <Form.Field>
                <label>Çalışma Şekli</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Şekli"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workingTimeId")
                  }
                  onBlur={formik.onBlur}
                  id="workingTimeId"
                  value={formik.values.workingTimeId}
                  options={workingTimeOparation}
                />
                {formik.errors.workingTimeId &&
                  formik.touched.workingTimeId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.workingTimeId}
                    </div>
                  )}
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={4}>
              <Form.Field>
                <label>Çalışma Tipi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Tipi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workingTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="workingTypeId"
                  value={formik.values.workingTypeId}
                  options={workingTypeOparation}
                />
                {formik.errors.workingTypeId &&
                  formik.touched.workingTypeId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.workingTypeId}
                    </div>
                  )}
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Field>
                <label>Eğitim Seviyesi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Eğitim Seviyesi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "educationLevelId")
                  }
                  onBlur={formik.onBlur}
                  id="educationLevelId"
                  value={formik.values.educationLevelId}
                  options={educationLevelOption}
                />
                {formik.errors.educationLevelId &&
                  formik.touched.educationLevelId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.educationLevelId}
                    </div>
                  )}
              </Form.Field>
            </Grid.Column>
          </Grid>

          <Grid stackable>
            <Grid.Column width={8}>
              <Form.Field>
                <label>Askerlik Durumu</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Askerlik Durumu"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "militaryTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="militaryTypeId"
                  value={formik.values.militaryTypeId}
                  options={militaryOption}
                />
                {formik.errors.militaryTypeId &&
                  formik.touched.militaryTypeId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.militaryTypeId}
                    </div>
                  )}
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Field>
                <label>Ehliyet Durumu</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Ehliyet Durumu"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "drivingLicenseId")
                  }
                  onBlur={formik.onBlur}
                  id="drivingLicenseId"
                  value={formik.values.drivingLicenseId}
                  options={drivingLicenseOption}
                />
                {formik.errors.drivingLicenseId &&
                  formik.touched.drivingLicenseId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.drivingLicenseId}
                    </div>
                  )}
              </Form.Field>
            </Grid.Column>
          </Grid>

          <Form.Field>
            <Grid stackable>
              <Grid.Column width={8}>
                <label style={{ fontWeight: "bold" }}>En Düşük Maaş</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="En Düşük Maaş"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
              </Grid.Column>
              <Grid.Column width={8}>
                <label style={{ fontWeight: "bold" }}>En Yüksek Maaş</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="En Yüksek Maaş"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field>
            <Grid stackable>
              <Grid.Column width={8}>
                <label style={{ fontWeight: "bold" }}>
                  Açık Posisyon sayısı
                </label>
                <Input
                  style={{ width: "100%" }}
                  id="numberOfOpenPositions"
                  name="numberOfOpenPositions"
                  error={Boolean(formik.errors.numberOfOpenPositions)}
                  onChange={formik.handleChange}
                  value={formik.values.numberOfOpenPositions}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Posisyon sayısı"
                />
                {formik.errors.numberOfOpenPositions &&
                  formik.touched.numberOfOpenPositions && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.numberOfOpenPositions}
                    </div>
                  )}
              </Grid.Column>
              <Grid.Column width={8}>
                <label style={{ fontWeight: "bold" }}>Son başvuru tarihi</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.applicationDeadline)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "applicationDeadline")
                  }
                  value={formik.values.applicationDeadline}
                  onBlur={formik.handleBlur}
                  name="applicationDeadline"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.applicationDeadline &&
                  formik.touched.applicationDeadline && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.applicationDeadline}
                    </div>
                  )}
              </Grid.Column>
            </Grid>
          </Form.Field>

          <Form.Field>
            <label>Açıklama</label>
            <TextArea
              placeholder="Açıklama"
              style={{ minHeight: 100 }}
              error={Boolean(formik.errors.jobDescription).toString()}
              value={formik.values.jobDescription}
              name="jobDescription"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.jobDescription && formik.touched.jobDescription && (
              <div className={"ui pointing red basic label"}>
                {formik.errors.jobDescription}
              </div>
            )}
          </Form.Field>
          <Button
            content="Oluştur"
            labelPosition="left"
            icon="add"
            color="violet"
            type="submit"
            size="large"
            style={{ marginTop: "2rem" }}
          />
        </Form>
      </Segment>
    </Container>
  );
}
