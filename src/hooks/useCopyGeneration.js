import { useState } from "react";
import { generateCopyVariants } from "../services/claudeAPI.js";

export const useCopyGeneration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const generate = async (copyType, brief, tones) => {
    if (!brief.trim()) {
      setError("Brief cannot be empty");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setSelectedVariant(0);

    try {
      const data = await generateCopyVariants(copyType, brief, tones);
      setResult(data);
    } catch (err) {
      setError(
        err.message ||
          "Generation failed. Check your brief and try again."
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
    setSelectedVariant(0);
  };

  return {
    loading,
    error,
    result,
    selectedVariant,
    setSelectedVariant,
    generate,
    reset,
  };
};