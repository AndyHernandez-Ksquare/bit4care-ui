export const Index = () => {
  return (
    <div>
      <h1>Index</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <a href="/admin">admin</a>
        <a href="/colaborador">colaborador</a>
        <a href="/cliente">cliente</a>
      </div>
    </div>
  );
};
