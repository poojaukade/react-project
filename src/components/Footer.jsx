function Footer({ totalTasks, remainingTasks }) {
  return (
    <footer className="footer">
      <p>
        You have completed {totalTasks - remainingTasks} out of{" "}
        {totalTasks} tasks.
      </p>
    </footer>
  );
}

export default Footer;