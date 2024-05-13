import dayjs from "dayjs";

export const transformDefaultValues = (defaultValue, selectedData) => {
  if (!defaultValue) return [];

  const fields = [];

  for (const key in defaultValue) {
    if (defaultValue.hasOwnProperty(key)) {
      let value = defaultValue[key];
      if (Array.isArray(value) && typeof value[0] === "number") {
        fields.push({
          name: key,
          value: value,
          errors: "",
        });
        continue;
      }
      if (Array.isArray(value)) {
        value = value.length > 0 ? value[0] : null;
      }
      if (key.includes("date")) {
        value = dayjs(value, "YYYY-MM-DD");
      } else if (key.includes("month")) {
        value = dayjs(value, "YYYY-MM");
      } else if (key.includes("_time")) {
        value = dayjs(value, "HH:mm:ss");
      } else if (key.includes("check")) {
        value = dayjs(value, "HH:mm:ss");
      } else if (typeof value === "string" && value.startsWith("http")) {
        value = [{ url: value }];
      }
      fields.push({
        name: key,
        value: value,
        errors: "",
      });
    }
  }

  if (selectedData && Array.isArray(selectedData)) {
    selectedData.forEach((data) => {
      if (data.name === "phone_numbers" && Array.isArray(data.value)) {
        const transformedPhoneNumbers = data.value.map((phoneNumber) => ({
          id: phoneNumber.id,
          contact_name: phoneNumber.contact_name,
          phone_number: phoneNumber.phone_number,
          relation: phoneNumber.relation,
        }));

        fields.push({
          name: "phone_numbers",
          value: transformedPhoneNumbers,
          errors: "",
        });
      } else {
        fields.push(data);
      }
    });
  }

  return fields;
};
