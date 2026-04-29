import { useState } from "react";
import { analyzeCopy } from "../services/claudeAPI.js";

export const useCopyAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const analyze = async (copyFormat, copy, context = "") => {
    if (!copy.trim()) {
      setError("Copy cannot be empty");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await analyzeCopy(copyFormat, copy, context);
      setResult(data);
    } catch (err) {
      setError(
        err.message ||
          "Analysis failed. Make sure there's copy in the field and try again."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setError(null);
    setResult(null);
  };

  return {
    loading,
    error,
    result,
    analyze,
    reset,
  };
};