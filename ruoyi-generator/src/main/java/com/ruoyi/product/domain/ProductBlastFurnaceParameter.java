package com.ruoyi.product.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 参数设置对象 product_blast_furnace_parameter
 * 
 * @author zongyoucheng
 * @date 2022-10-19
 */
public class ProductBlastFurnaceParameter extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 罐龄系数ε */
    @Excel(name = "罐龄系数ε")
    private Long tankAgeCoefficient;

    /** 基础高度h₀ */
    @Excel(name = "基础高度h₀")
    private Long foundationHeight;

    public void setTankAgeCoefficient(Long tankAgeCoefficient) 
    {
        this.tankAgeCoefficient = tankAgeCoefficient;
    }

    public Long getTankAgeCoefficient() 
    {
        return tankAgeCoefficient;
    }
    public void setFoundationHeight(Long foundationHeight) 
    {
        this.foundationHeight = foundationHeight;
    }

    public Long getFoundationHeight() 
    {
        return foundationHeight;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("tankAgeCoefficient", getTankAgeCoefficient())
            .append("foundationHeight", getFoundationHeight())
            .toString();
    }
}
