import strings from "../i18n/definitions";

export default function UiLanguageSelector({ languages, selected, onChange }) {
  languages.sort((a, b) => (a.name > b.name) ? 1 : -1)
  let key = 0;
  return (
    <select
      name="learned_language"
      value={strings[selected.toLowerCase()]}
      onChange={(e) => onChange(e)}
    >
      {languages.map((lang) => (
        <option key={key++} code={lang.code}>
          {strings[lang.name.toLowerCase()]}
        </option>
      ))}
    </select>
  );
}
