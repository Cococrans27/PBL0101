import "./App.css";

function App() {
  const data = {
    nama: "Achmad Nasril Shofbriansyah",
    nim: "251080200021",
    tanggal: "14 Oct 2026",
    waktu: "20:51",
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Hello World</h1>
        <div className="divider"></div>

        <table className="info">
          <tbody>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>{data.nama}</td>
            </tr>
            <tr>
              <td>NIM</td>
              <td>:</td>
              <td>{data.nim}</td>
            </tr>
            <tr>
              <td>Tanggal</td>
              <td>:</td>
              <td>{data.tanggal}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>:</td>
              <td>{data.waktu}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
