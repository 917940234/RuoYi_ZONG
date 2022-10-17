package com.ruoyi.product.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.product.mapper.ProductBlastFurnaceCastMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceCast;
import com.ruoyi.product.service.IProductBlastFurnaceCastService;
import com.ruoyi.common.core.text.Convert;

/**
 * 出铁时间计控Service业务层处理
 * 
 * @author zongyoucheng
 * @date 2022-10-11
 */
@Service
public class ProductBlastFurnaceCastServiceImpl implements IProductBlastFurnaceCastService 
{
    @Autowired
    private ProductBlastFurnaceCastMapper productBlastFurnaceCastMapper;

    /**
     * 查询出铁时间计控
     * 
     * @param blastFurnaceCastId 出铁时间计控主键
     * @return 出铁时间计控
     */
    @Override
    public ProductBlastFurnaceCast selectProductBlastFurnaceCastByBlastFurnaceCastId(Long blastFurnaceCastId)
    {
        return productBlastFurnaceCastMapper.selectProductBlastFurnaceCastByBlastFurnaceCastId(blastFurnaceCastId);
    }

    /**
     * 查询出铁时间计控列表
     * 
     * @param productBlastFurnaceCast 出铁时间计控
     * @return 出铁时间计控
     */
    @Override
    public List<ProductBlastFurnaceCast> selectProductBlastFurnaceCastList(ProductBlastFurnaceCast productBlastFurnaceCast)
    {
        return productBlastFurnaceCastMapper.selectProductBlastFurnaceCastList(productBlastFurnaceCast);
    }

    /**
     * 新增出铁时间计控
     * 
     * @param productBlastFurnaceCast 出铁时间计控
     * @return 结果
     */
    @Override
    public int insertProductBlastFurnaceCast(ProductBlastFurnaceCast productBlastFurnaceCast)
    {
        return productBlastFurnaceCastMapper.insertProductBlastFurnaceCast(productBlastFurnaceCast);
    }

    /**
     * 修改出铁时间计控
     * 
     * @param productBlastFurnaceCast 出铁时间计控
     * @return 结果
     */
    @Override
    public int updateProductBlastFurnaceCast(ProductBlastFurnaceCast productBlastFurnaceCast)
    {
        return productBlastFurnaceCastMapper.updateProductBlastFurnaceCast(productBlastFurnaceCast);
    }

    /**
     * 批量删除出铁时间计控
     * 
     * @param blastFurnaceCastIds 需要删除的出铁时间计控主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceCastByBlastFurnaceCastIds(String blastFurnaceCastIds)
    {
        return productBlastFurnaceCastMapper.deleteProductBlastFurnaceCastByBlastFurnaceCastIds(Convert.toStrArray(blastFurnaceCastIds));
    }

    /**
     * 删除出铁时间计控信息
     * 
     * @param blastFurnaceCastId 出铁时间计控主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceCastByBlastFurnaceCastId(Long blastFurnaceCastId)
    {
        return productBlastFurnaceCastMapper.deleteProductBlastFurnaceCastByBlastFurnaceCastId(blastFurnaceCastId);
    }
}
